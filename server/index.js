const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config();

app.use(cookieParser())
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useFindAndModify:false,
    // useUnifiedTopology:true
}).then(() => console.log("DB connected successfully")).catch((err) => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(require("./routes/auth"))

app.listen(PORT,() => console.log(`port is running at ${PORT}`))