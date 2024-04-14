const Joi = require('joi');


const _id = Joi.string().hex().length(24);
const word = Joi.string().length(5)
const len = Joi.string()

const createWord = Joi.object({
  word: word.required(),
  len: len.required(),
})
const updateWord = Joi.object({
  word:word,
  len:len,
})
const getWord = Joi.object({
  id: _id.required(),
})


module.exports={
  createWord,
  updateWord,
  getWord
}
