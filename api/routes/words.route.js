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
async (req,res)=>{
  const body = req.body;
  const answer = await wordService.create(body)
  res.status(201).json(answer)

})

router.patch('/:id',
validatorHandler(getWord,'params'),
validatorHandler(updateWord,'body'),
async (req,res)=>{
 const {id} = req.params
 const body = req.body;
 const answer = await wordService.update(id,body)
 if(answer)
  res.status(200).json(body)
})

router.delete('/:id',
validatorHandler(getWord,'params'),
async (req,res)=>{
 try {
  const {id} = req.params
  const answer = await wordService.delete(id)
  res.status(200).json(answer)
 } catch (error) {
  res.status(500)
 }
})

module.exports = router
