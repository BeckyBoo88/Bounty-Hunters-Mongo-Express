const express = require('express')

const db = require('./models')

db.connect()

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({msg: "Welcome to the Bounty-Mongoose API"})
})

app.get('/bounties', (req, res) => {
    const bounties = db.Bounty.find({})
    .then(() => {
        res.json({ bounties })
    })
    .catch(err => console.log(err))
})

app.post('/bounties', (req, res) => {
   const createdBounty = db.Bounty.create({
        name: req.body.name,
        wantedFor: req.body.wantedFor,
        client: req.body.client,
        reward: req.body.reward,
        ship: req.body.ship,
        hunters: req.body.hunters,
        captured: req.body.captured
    })
    .then (() => {
        createdBounty.save()
        res.redirect('/bounties')
    })
    .catch(err => console.log(err))
})

app.put('/bounties/:id', (req, res) => {
    db.Bounty.findById(req.params.id)
    .then(foundBounty => {
        foundBounty.name = req.body.name
        foundBounty.wantedFor = req.body.wantedFor
        foundBounty.client = req.body.client
        foundBounty.reward = req.body.reward
        foundBounty.ship = req.body.ship
        foundBounty.hunters = req.body.hunters
        foundBounty.captured = req.body.captured

        foundBounty.save()
        .then(() => {
            res.redirect('/bounties')
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

app.delete('/bounties/:id', (req, res) => {
    db.Bounty.findByIdAndDelete(req.params.id)
    .then(deletedItem => {
        console.log(deleteditem)
        res.redirect('/bounties')
    })
    .catch(err => console.log (err))
})

app.listen(PORT, () => console.log(`Aloha to port ${PORT}! 🌺`))