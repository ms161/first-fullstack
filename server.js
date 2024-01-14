const express=require('express')
const cors=require('cors')
const sequelize=require('./utils/database')
const bodyParser=require('body-parser')

const app=express() 

const userRoute=require('./routes/userRoutes')
app.use(cors())
app.use(bodyParser.json({extended:false}))

app.use(userRoute)


sequelize.sync()
.then(()=>{
    app.listen(5000)

})
.catch(err=>{console.log(err)})
