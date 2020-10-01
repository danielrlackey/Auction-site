const express = require("express");

const app = express();
const mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const URI = "mongodb+srv://skunk_hunnt:P@cquiaop4p224@cluster0.4cqzd.mongodb.net/Fight_Auction?retryWrites=true&w=majority"
mongoose.connect(URI, { useNewUrlParser: true }).then(() => {
    /*eslint-disable*/
    console.log('Database connected...')
}).catch((err) => {
    console.log(err);
})
app.get("/items", function(req, res){
  //make a DB query and send back all the items
})


const  mockRanking = {
    name: "floyd"
}

const ItemSchema = new mongoose.Schema({

    itemDescription: { type: String },
    askingPrice: { type: String },
    itemDetails: { type: String },

});

const fightItem = mongoose.model('Item', ItemSchema);

app.get("/rankings", function(req, res){
    res.send(mockRanking)
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