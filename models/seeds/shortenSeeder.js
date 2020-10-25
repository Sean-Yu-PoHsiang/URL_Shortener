const mongoose = require('mongoose')
const Shorten = require('../shorten.js')

const dummyData = [
  {
    fullUrl: 'https://www.google.com/',
    shortId: 'rewq1'
  },
  {
    fullUrl: 'https://www.facebook.com/',
    shortId: 'rewq2'
  }
]

mongoose.connect('mongodb://localhost/URL_Shortener', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
  Shorten.insertMany(dummyData)
  console.log('seeds done')
})