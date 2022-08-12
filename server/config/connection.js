mongoose= require('mongoose')

const MONG_URI= 'mongodb://localhost:27017/lab_Iek6'

mongoose.connect(MONG_URI,{useUnifiedTopology:true,useNewUrlParser:true,  useFindAndModify: false })

const db= mongoose.connection;

db.on('error',function(err){

console.log('Error occured'+err)

})

db.once('connected',function(){

console.log('connection is successful to'+ MONG_URI)
 
})

module.exports=db