const { getAllCards, getCardTitles } = require('../controllers/starWarsCard')

const cardsRouter = require('express').Router()

cardsRouter.get('/allCards', getAllCards)
cardsRouter.get('/allTitles', getCardTitles)

module.exports = cardsRouter
