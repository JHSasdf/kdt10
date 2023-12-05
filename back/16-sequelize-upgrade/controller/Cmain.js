const { Player, Profile, Team} = require('../models/index');
async function getPlayers (req, res) {
    try {
        const players = await Player.findAll();
        res.send(players);
    }catch(err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}

module.exports = {
    getPlayers: getPlayers
}