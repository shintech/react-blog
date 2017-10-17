var faker = require('faker')
var fs = require('fs')
var execa = require('execa')

var init = `DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\\c api_development;

CREATE TABLE entries (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  content VARCHAR,
  image VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);\n
`

function getData (callback) {
  var arr = []

  for (var i = 10; i > 0; i--) {
    var obj = {
      image: faker.fake('{{image.image}}'),
      content: faker.fake('{{lorem.paragraphs}}'),
      title: faker.fake('{{lorem.sentence}}')
    }
    arr.push(obj)
  }
  callback(arr)
}

function writeData (data, callback) {
  fs.writeFile('db.sql', init)

  for (let i of data) {
    fs.appendFile('db.sql', `INSERT INTO entries ( title,content,image )\nVALUES('${i.title}', '${i.content}', '${i.image}');\n`)
  }
  callback(data)
}

getData(data => {
  writeData(data, () => {
    execa.shell('psql -U postgres -f db.sql')
    .then(() => {
      console.log('success')
    })
  })
})
