DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE entries (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  content VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);

INSERT INTO entries ( title,content )
VALUES ( 'test', 'test' );
