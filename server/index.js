const express = require('express')
const app = express()
const cors =  require ("cors")
const bodyParser = require ("body-parser")
const dotenv = require ("dotenv")
const { default: mongoose } = require('mongoose')
dotenv.config();
app.use(cors());
app.use(bodyParser.json())

const URL = process.env.URL

const PASSWORD  = process.env.PASSWORD
mongoose.connect(URL.replace('<password>',PASSWORD))

const UserModel = new mongoose.model(
    "User",
    new mongoose.Schema({
        image:String,
        name:String,
        username:String
    })
)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

app.get('/users',async(req,res)=>{
    const getAll = await UserModel.find()
    res.status(200).send(getAll)
})

app.get('/users/:id',async(req,res)=>{
    const id = req.params.id
    const getID = await UserModel.findById(id)
    res.status(200).send(getID)
})

app.delete('/users/:id',async(req,res)=>{
    const id = req.params.id
    const getID = await UserModel.findByIdAndDelete(id)
    res.status(203).send(getID)
})

app.put('/users/:id',async(req,res)=>{
    const id = req.params.id
    const PUT = await UserModel.findByIdAndUpdate(id,({
        image:req.body.image,
        name:req.body.name,
        username:req.body.username
    }))
    res.status(203).send(PUT)
})

app.post('/users',async(req,res)=>{
    const newUser = new UserModel(
   {
    image:req.body.image,
    name:req.body.name,
    username:req.body.username
   })
   await newUser.save()
   res.status(201).send()
})