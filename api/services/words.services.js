const {Word} = require('./../model/index');

class WordService {
  constructor() {
  }

  async getAll() {
    try {
      const all = await Word.find({});
      return all
    } catch (error) {
      throw new Error(error)
    }
  }
  async getOne(id){
    try {
      const doc = await Word.findOne({
        _id:id
      })
      if (doc) {
         return doc
      }
    } catch (error) {
      throw new Error(error)
    }

  }
  async create(body){
    try {
      const res = await Word.create(body)
      return res
    } catch (error) {
      throw new Error(error)
    }

  }
  async update(id,body){
    try{
      const res = await Word.findOneAndUpdate({_id:id},body)
      return res;
    }catch(error){
      throw new Error(error)
    }
  }
  async delete(id){
    try{
      const answer = await Word.findByIdAndDelete(id)
      return answer
    }catch(error){
      throw new Error(error);
    }
  }


}
module.exports = WordService;
