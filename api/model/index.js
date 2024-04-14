const mongoose =  require('mongoose')
const WordModel =  mongoose.Schema({
    word:{
      type:String,
      require:[true, "A word is required"]
    },
    len:{
      type:String,
      require:[true, "A word is required"]
    }
})
const Word =  mongoose.model("words",WordModel)
module.exports = {
  Word
}
