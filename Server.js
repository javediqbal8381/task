const express=require('express')
const dbconnection=require('./db')
const port = process.env.PORT|| 5000;
const bodyParser=require("body-Parser")

const app=express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))



    app.use((req, res, next)=> {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Headers", 
            "Origin, X-Requested-With, Content-Type, Accept,Authorization");
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE')
        next();
    });

app.use('/api/users', require('./routes/usersRoute'))
app.use('/api/admins', require('./routes/adminRoute'))




app.listen(port,()=>{console.log(`server started at port ${port}`)})