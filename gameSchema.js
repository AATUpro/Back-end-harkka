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
      type: Date
    },
    genre: {
      type: String
    },
    details: {
      type: String
    },
    released: {
      type: Date
    }
},
    { collection: 'gamelibrary'}
)

module.exports = mongoose.model('gamelibrary', game);