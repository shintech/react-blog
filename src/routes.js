import express from 'express'
import {entries} from './queries'

export default function getRouter (options) {
  const router = express.Router()

// Entries

  router.route('/entries')
    .get(entries(options).getAllEntries)
    .post(entries(options).createEntry)

  router.route('/entries/:id')
    .get(entries(options).getSingleEntry)
    .put(entries(options).updateSingleEntry)
    .delete(entries(options).removeEntry)

  return router
}
