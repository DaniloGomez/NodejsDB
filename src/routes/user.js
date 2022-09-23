const express = require('express')
const userSchema = require('../models/user')
const user_routes = express.Router()

user_routes.post("/users", (req,res) => {
    const new_user = userSchema(req.body)
    new_user
    .save()
    .then((data) =>{
        res.json(data)
    })
    .catch((err)=>{
        res.json({
            message:err
        })
    })
})

user_routes.get("/users",(req,res) => {
    userSchema
        .find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json({message : err})
        })
})

user_routes.get("/users/:userId", (req,res) => {
    const {userId} = req.params
    userSchema
        .findById(userId)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json({message: err})
        })
})

user_routes.put("/users/:userId",(req,res) => {
    const {userId} = req.params
    const {user_name, lastname, age, email, proffession, address_work} = req.body
    userSchema
        .updateOne(
            {_id: userId},
            {$set:{user_name, lastname, age, email, proffession, address_work}}
        )
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json({message : err})
        })
})
user_routes.delete("/users/:userId",(req,res) => {
    const {userId} = req.params
    userSchema
        .deleteOne({_id: userId})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(data)
        })
})

module.exports = user_routes