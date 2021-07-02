const db = require('./models')
db.connect()

const bountyCRUD = async () => {
    try {
        const newBounty = await new db.Bounty({
            name: 'Han Solo',
            wantedFor : 'Owing money',
            client : 'Jabba the Hut',
            reward : 1000000,
            ship: 'Millennium Falcon',
            hunters :['Bobba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
            captured: false
        })

        await newBounty.save()
        console.log("New Bounty:", newBounty)
    } catch (err) {
        console.log(err)
    }
}

bountyCRUD()