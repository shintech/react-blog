const queries = {}

export default function getAllRoutes (options) {
  const {db} = options

  queries.getAllEntries = (req, res, next) => {
    db.any('select * from entries')
    .then(function (data) {
      res.status(200)
      .json(data)
    })
    .catch(function (err) {
      return next(err)
    })
  }

  queries.createEntry = (req, res, next) => {
    db.none('insert into entries( title, content )' + 'values( ${title}, ${content} )', req.body) // eslint-disable-line
    .then(function () {
      res.status(200)
      .json({
        status: 'success',
        message: 'Inserted one entry...'
      })
    })
    .catch(function (err) {
      return next(err)
    })
  }

  queries.getSingleEntry = (req, res, next) => {
    const entryID = parseInt(req.params.id)
    db.one('select * from entries where id = $1', entryID)
    .then(function (data) {
      res.status(200)
      .json(data)
    })
    .catch(function (err) {
      return next(err)
    })
  }

  queries.updateSingleEntry = (req, res, next) => {
    const entryID = parseInt(req.params.id)
    db.none('update entries set title=$1, content=$2 where id=$3', [req.body.title, req.body.content, entryID])
    .then(function (done) {
      res.status(200)
      .json({
        status: 'success',
        message: 'Updated one entry...'
      })
    })
    .catch(function (err) {
      return next(err)
    })
  }

  queries.removeEntry = (req, res, next) => {
    var entryID = parseInt(req.params.id)
    db.result('delete from entries where id = $1', entryID)
    .then(function (data) {
      res.status(200)
      .json({
        status: 'success',
        message: `Removed ${data.rowCount} entry`
      })
    })
    .catch(function (err) {
      return next(err)
    })
  }

  return queries
}
