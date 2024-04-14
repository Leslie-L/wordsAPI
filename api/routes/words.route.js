const express = require('express')
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createWord,
  updateWord,
  getWord
} = require('./../schemas/words.schemas')

const router = express.Router()

router.get('/',(req,res)=>{
res.send('todas')
})
router.get('/:id',
validatorHandler(getWord,'params'),
(req,res)=>{
 const {id} = req.params
 res.status(201).json(id)
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
