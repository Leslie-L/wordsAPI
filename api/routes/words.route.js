const express = require('express')
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createWord,
  updateWord,
  getWord
} = require('./../schemas/words.schemas')
const WordService= require('./../services/words.services')


const router = express.Router()
const wordService = new WordService();


router.get('/',async (req,res)=>{
  const answer =await wordService.getAll()
  if(answer){
   res.status(200).json(answer)
  }else{
    res.status(404)
  }
})

router.get('/:id',
validatorHandler(getWord,'params'),
async (req,res)=>{
 const {id} = req.params
 const doc = await wordService.getOne(id)
 res.status(200).json(doc)
})

router.post('/',
validatorHandler(createWord,'body'),
(req,res)=>{
  const{word, len} = req.body;
  res.status(201).json({
    word,
    len
  })

})

router.patch('/:id',
validatorHandler(getWord,'params'),
validatorHandler(updateWord,'body'),
(req,res)=>{
 const {id} = req.params

  res.status(201).json(id)
})

router.delete('/:id',
validatorHandler(getWord,'params'),
(req,res)=>{
 const {id} = req.params
  res.status(201).json(id)
})

module.exports = router
