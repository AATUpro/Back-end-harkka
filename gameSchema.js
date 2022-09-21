const mongoose = require('mongoose');

const gameSchema = mongoose.Schema;

let game = new gameSchema ( {
    name: {
    type: String
    },
    publisher: {
      type: String
    },
    platform: {
      type: String
    },
    added: {
      type: Boolean
    },
    genre: {
      type: String
    },
    details: {
      type: String
    },
    released: {
      type: Boolean
    }
},
    { collection: 'gamelibrary'}
)

module.exports = mongoose.model('gamelibrary', game);