// all imports below
const express = require("express");
const mongoose = require('mongoose');
let bodyParser = require('body-parser');

const app = express();
let cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// code to connect datbase below
const URI = "mongodb+srv://skunk_hunnt:P@cquiaop4p224@cluster0.4cqzd.mongodb.net/Fight_Auction?retryWrites=true&w=majority"
mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => {
    console.log('Database connected...')
  }).catch((err) => {
    console.log(err);
})

// code to stringify items below
const ItemSchema = new mongoose.Schema({
    itemDescription: { type: String },
    askingPrice: { type: String },
    itemDetails: { type: String },
});
const fightItem = mongoose.model('Item', ItemSchema);


// all axios requests below
app.get("/items", function(req, res){
    //make a DB query and send back all the items
  })



  const p4pRankings = {
    saulAlvarez: {
        name: "Saul Alvarez",
        record: "53-1-0",
        kos: "36",
        alias: "Canelo",
        nationality: "Mexico",
        debut: "10-29-2005",
        division: "Middleweight", 
        stance: "orthodox",
        height: "5'8",
        reach: "70 1/2",
        },
    tysonFury:{
        name: "Tyson Luke Fury",
        record: "30-0-1",
        kos: "21",
        alias: "The Gypsy King",
        nationality: "United Kingdom",
        debut: "12-06-2008",
        division: "Heavyweight", 
        stance: "orthodox",
        height: "6'9",
        reach: "85",
        },
    errolSpenceJr: {
        name: "Errol Spence Jr",
        record: "60-0-0",
        kos: "21",
        alias: "The Truth",
        nationality: "USA",
        debut: "11-09-2012",
        division: "Welterweight", 
        stance: "southpaw",
        height: "5'9 1/2",
        reach: "72",
        },
    gennadyGolovkin: {
        name: "Gennady Golovkin",
        record: "40-1-1",
        kos: "35",
        alias: "GGG",
        nationality: "Kazakhstan",
        debut: "05-06-2006",
        division: "Middleweight", 
        stance: "orthodox",
        height: "5'10 1/2",
        reach: "70",
        },
    deontayWilder: {
        name: "Deontay Wilder",
        record: "42-1-1",
        kos: "41",
        alias: "The Bronze Bomber",
        nationality: "USA",
        debut: "11-15-2008",
        division: "HeavyWeight", 
        stance: "orthodox",
        height: "6'7",
        reach: "83",
        },
    terrenceCrawford: {
        name: "Terrence Crawford",
        record: "36-0-0",
        kos: "27",
        alias: "Bud",
        nationality: "USA",
        debut: "03-14-2008",
        division: "Welterweight", 
        stance: "southpaw",
        height: "5'8",
        reach: "74",
        },
    anthonyJoshua: {
        name: "Anthony Joshua",
        record: "23-1-0",
        kos: "21",
        alias: "AJ",
        nationality: "United Kingdom",
        debut: "10-05-2013",
        division: "Heavyweight", 
        stance: "orthodox",
        height: "6'6",
        reach: "82",
        },
    vasylLomachenko: {
        name: "Vasyl Lomachenko",
        record: "14-1-0",
        kos: "10",
        alias: "The Matrix",
        nationality: "Ukraine",
        debut: "10-12-2013",
        division: "Lightweight", 
        stance: "southpaw",
        height: "5'7",
        reach: "65 1/2",
        },
    mannyPacquiao: {
        name: "Manny Pacquiao",
        record: "62-7-2",
        kos: "39",
        alias: "Pacman",
        nationality: "Phillippines",
        debut: "01-22-1995",
        division: "Welterweight", 
        stance: "southpaw",
        height: "5'5 1/2",
        reach: "67",
        },
    alexanderPovetkin: {
        name: "Alexander Povetkin",
        record: "36-2-1",
        kos: "25",
        alias: "Sasha",
        nationality: "Russia",
        debut: "06-11-2005",
        division: "Heavyweight", 
        stance: "orthodox",
        height: "6'2",
        reach: "75",
        },
  }

app.get("/rankings", function(req, res){
    console.log()
    res.send()
})


app.post("/items", function(req, res){
    console.log(req.body)
    let item = new fightItem();
    item.itemDescription = req.body.item.itemDescription
    item.askingPrice = req.body.item.askingPrice
    item.itemDetails = req.body.item.itemDetails
    item.save((err,res)=>{
        console.log(res)
    })
    res.send("endpoint hit!");
});


app.delete("/items", function(req, res){
    //Delete all the items in the fucking database
})


app.listen(5000, function(){
    console.log("server has started...")
});