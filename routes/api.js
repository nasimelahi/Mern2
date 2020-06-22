const express = require('express');

const router = express.Router();

//items model

const Item = require('../model/Item');

// Get All Item

router.get('/', (req,res) => {
    Item.find()
    .sort({ data: -1})
    .then((item => res.json(item2)))
})







module.exports = router