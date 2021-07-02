// require the mongoose pkg
const mongoose = require('mongoose')

// define a mongoose schema
const BountySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength:100
    },
    wantedFor: {
        type: String
    },
    client: {
        type: String
    },
    reward: {
        type: Number
    },
    ship: {
        type: String
    },
    hunters: {
        type: Array
    },
    captured: {
        type: Boolean 
    }
 }, {
    timestamps: true
})

// build a model from schema or export schema 

module.exports = BountySchema