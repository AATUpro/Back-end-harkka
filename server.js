// Ota express käyttöön
const express = require('express');
const app = express();

// Ota mongoose käyttöön -> tietokantayhteys
const mongoose = require('mongoose');

//Ota books  muista vaihtaa harkassa oikea tiedoston nimi
const book = require('./bookSchema.js');

//Ota mongodb käyttöön -- palataan asiaan, tarviiko asentaa erikseen
const mongodb = require('mongodb');

//Ota bodyparser käyttöön lomakkeen käsittelyä varten
const bodyparser = require('body-parser');
const { userInfo } = require('os');

//Aseta määritykset express-pavelimelle
//Ota käyttöön public-tiedosto
app.use(express.static('public'));
    //Ota käyttöön bodyparser
 app.use(bodyparser.urlencoded({extended:false}));

//Muodostetaan tietokanta yhteys
// Luo vakio connecrionstringille
const uri = 'mongodb+srv://AATUpro:<password>@cluster0.pusklqr.mongodb.net/?retryWrites=true&w=majority'
//Muodostetaan yhteys tietokantaan
mongoose.connect(uri, { useUnifiedTopology: true, UseNewUrlParser:true})

//Luodaan vakio tietokantayhteydelle
const db = mongoose.connection
//Näytä ilmoitus, jos yhteys ok
db.once('open', function() {
    console.log('Tietokantayhteys avattu');
})

//Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080, function(){});