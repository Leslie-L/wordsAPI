const mongoose =  require('mongoose')
const express =  require("express")
const PORT = process.env.PORT || 3005;
const routerApi = require('./routes');

const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.get('/',(req,res)=>{
  //console.log('Hello world: Words game')
  res.send('<h1>Hello world: words game</h1>')
})

routerApi(app);
mongoose.connect(process.env.DB)
  .then(() =>{
    app.listen(PORT,()=>{
      console.log('server on')
    })
  });

