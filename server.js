const express = require('express');
const mongoose = require('mongoose')
const app = express();
const db = require('./config/keys').mongoURI;
const item = require('./routes/api')

app.use(express.json());


app.get('/', (req,res) => {res.send('this is out home page')})

//DB Connection 
mongoose.connect(db, {useNewUrlParser:true , useUnifiedTopology : true})
.then(() => {console.log('mongodb connected')})
.catch (err => console.log(err))

//route
app.use('/api/items',item);

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log('server is runing at' + PORT)
})