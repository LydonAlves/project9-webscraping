const Card = require('../models/starWarsCard')

const getAllCards = async (req, res, next) => {
  try {
    const allCards = await Card.find()
    return res.status(200).json(allCards)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getCardTitles = async (req, res, next) => {
  try {
    const allTitles = await Card.find({}, 'title')
    return res.status(200).json(allTitles)
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { getCardTitles, getAllCards }
