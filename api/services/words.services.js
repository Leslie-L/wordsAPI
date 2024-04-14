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
  async create(wordn,len){

  }
  async update(id,body){

  }
  async delete(id){

  }


}
module.exports = WordService;
