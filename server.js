// Ota express käyttöön
const express = require('express');
const app = express();

// Ota mongoose käyttöön -> tietokantayhteys
const mongoose = require('mongoose');

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

//Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080, function(){});