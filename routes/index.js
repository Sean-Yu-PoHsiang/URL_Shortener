const express = require('express')
const router = express.Router()

const Shorten = require('../models/shorten.js')
const generateShortId = require('../generateShortId.js')

//route of index page
router.get('/', async (req, res) => {
  try {
    res.render('index')
  } catch (err) {
    res.sendStatus(400)
    console.log(err)
  }
})

//route of form post
router.post('/', async (req, res) => {
  const fullUrl = req.body.fullUrl

  await Shorten.findOne({ fullUrl })
    .lean()
    .then(async (findFullUrl) => {
      if (findFullUrl !== null) {
        res.redirect(`/results/${findFullUrl.shortId}`)

      } else {
        let state = 'run'
        while (state === 'run') {
          let shortId = generateShortId(5)

          await Shorten.findOne({ shortId })
            .lean()
            .then(async (findShortId) => {
              if (findShortId === null) {
                state = 'stop'

                await Shorten.create({ fullUrl, shortId })
                  .then((newShortId) => {
                    res.redirect(`/results/${newShortId.shortId}`)
                  })
                  .catch((err) => {
                    res.sendStatus(400)
                    console.log(err)
                  })
              }
            })
            .catch((err) => {
              res.sendStatus(400)
              console.log(err)
            })
        }
      }
    })
    .catch((err) => {
      res.sendStatus(400)
      console.log(err)
    })
})

//route of result page
router.get('/results/:shortId', (req, res) => {
  const shortId = req.params.shortId
  Shorten.findOne({ shortId })
    .lean()
    .then((shorten) => {
      res.render('result', { shorten })
    })
    .catch((err) => {
      res.sendStatus(400)
      console.log(err)
    })
})

//route of shortenID redirect path
router.get('/:shortId', (req, res) => {
  const shortId = req.params.shortId
  Shorten.findOne({ shortId })
    .lean()
    .then((shorten) => {
      if (shorten !== null) {
        res.redirect(`${shorten.fullUrl}`)
      } else {
        res.render('noPath')
      }
    })
    .catch((err) => {
      res.sendStatus(400)
      console.log(err)
    })
})

module.exports = router