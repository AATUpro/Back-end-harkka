const express =  require('express');
const app = express();

const mongoose = require('mongoose');

const game = require('./gameSchema.js');

const mongodb = require('mongodb');

const bodyparser = require('body-parser');

app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:false}));

const uri = 'mongodb+srv://AATUpro:@cluster0.pusklqr.mongodb.net/gamelibrary?retryWrites=true&w=majority'
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser:true})

const db = mongoose.connection
db.once('open', function() {
    console.log('Tietokantayhteys avattu');
})

app.get('/gamelibrary', function(req,res) {
    game.find(req.query, function( err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result);
        }
    })
    })

app.post('/newGame', function (req, res) {
    delete req.body._id; 
    db.collection('gamelibrary').insertOne(req.body);
    res.send('Game is added with following data: ' + JSON.stringify(req.body));
})

app.post('/deleteGame', function (req, res) {
    db.collection('gamelibrary').deleteOne( { _id: new mongodb.ObjectId(req.body._id)}, function( err, result){
        if ( err ) {
            res.send('Error deleting with following data: ' + err);
        } else {
            res.send('Game is deleted with following id: ' + req.body._id);
        }
    });
   
})

app.post('/updateGame', function(req,res){
    db.collection('gamelibrary').updateOne({_id:new mongodb.ObjectID(req.body._id)},{$set:{name:req.body.name, publisher:req.body.publisher, platform:req.body.platform, added:req.body.added, genre:req.body.genre, details:req.body.details, released:req.body.released}},function(err,results){
        if ( err ) {
            res.send('Error updating: ' + err);
        } else {
            res.send('Game is updated with following id: ' + req.body._id + ' and following data: ' + JSON.stringify(req.body) );
        }
    });
   
})


const server = app.listen(8080, function(){});