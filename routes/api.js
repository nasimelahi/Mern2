const express = require('express');

const router = express.Router();

//items model

const Item = require('../model/Item');

// Get All Item

router.get('/', (req,res) => {
    Item.find()
    .sort({ data: -1})
    .then((item => res.json(item)))
})

// post data

router.post('/',(req,res) => {
    const newItem = new Item({
        name:req.body.name
    })

    newItem.save()
    .then((item) => {
       console.log(item)
    })
})







module.exports = router