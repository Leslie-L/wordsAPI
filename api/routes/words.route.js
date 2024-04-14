const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
res.send('todas')
})
router.get('/:id',(req,res)=>{
  res.send('una')
})
router.post('/',(req,res)=>{
  res.send('agregar')
})
router.patch('/',(req,res)=>{
  res.send('modificar')
})
router.delete('/',(req,res)=>{
  res.send('eliminar')
})

module.exports = router
