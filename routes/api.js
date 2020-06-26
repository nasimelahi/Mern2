const express = require('express');

const router = express.Router();

//items model

const items = require('../model/Item');

// Get All Item

router.get('/', (req,res) => {
    items.find()
    .sort({ data: -1})
    .then((item => res.json(item)))
   
})

// get induvidual item

router.get('/:id', (req,res) => {
   let item_check = items.find({_id:req.params.id})
   .then( item => {
    if(item){
        return res.status(200).json(item)
    }else{
        return res.status(400).json({"msg":"this item is not in list"})
    }
   })
   .catch(err => next(err))
    //console.log(item_check)
})

// post data

router.post('/',(req,res) => {
    const newItem = new item({
        name:req.body.name
    })

    newItem.save()
    .then((item) => { res.json(item)})
})

// update Item

router.put('/:id', (req,res) =>{
    items.findOneAndUpdate({_id:req.params.id}, { $set: {name:req.body.name}}, {new:true})
    .then((item)=> {
        if(item){
            return res.json(item)
        }else{
            return res.status(400).json({"msg" : " Item is not Updated"})
        }
    })
    .catch(err => console.log(err))
})

//Delete Record
router.delete('/:id', (req,res) => {
    items.findOneAndDelete({_id:req.params.id})
    .then(item => {
        if(item){
            return res.status(200).json({"msg":"Item delated"})
        }
    })
    .catch(err => console.log(err))
})







module.exports = router