const mongoose=require('mongoose')
const uri = 'mongodb+srv://varanasi48:Varanasi89*@cluster0.4dosq9v.mongodb.net/?retryWrites=true&w=majority'


  const db= mongoose.connect(uri)
  console.log("connected")
  
