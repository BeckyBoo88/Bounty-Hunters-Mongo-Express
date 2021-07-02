// require the mongoose pkg
const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
// define my atlas URI

const uri = process.env.ATLAS_URI

// connect mongoose to atlas
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const db = mongoose.connection

db.once('open', () => {
    console.log(`🦄 mongoDB connection ${db.host}:${db.port}`)
})

db.on('error', err => {
    console.log.og(`!! oh no! the datacenter burned down!\n ${err}`)
})
}

// export a function to connect 
module.exports = {
    connect,
    Bounty: mongoose.model('Bounty', require('./Bounty.js'))
}