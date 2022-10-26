const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect('mongodb://localhost:27017/task',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
}

connectDB()
module.exports=mongoose

