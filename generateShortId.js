const mongoose = require('mongoose')

const Shorten = require('./models/shorten.js')

function isNumberIncluded(string) {
  const numbers = '1234567890'
  const array = string.split('')
  for (let i = 0; i < array.length; i++) {
    if (numbers.includes(array[i])) {
      return true
    }
  }
  return false
}

function generateShortId(stringLength) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const allLetter = lowerCaseLetters + upperCaseLetters + numbers

  let collection = []
  collection = collection.concat(allLetter.split(''))

  //random choose letter from collection
  let shortId = ''
  while (!isNumberIncluded(shortId)) {
    shortId = ''
    for (let i = 0; i < stringLength; i++) {
      const index = Math.floor(Math.random() * collection.length)
      shortId += collection[index]
    }
  }

  return shortId
}

module.exports = generateShortId