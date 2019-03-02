var express = require('express');
var router = express.Router();

// Import the model (cburger.js) to use its database functions.
var burger = require('../models/burger.js')

router.get('/', function(req,res){
    burger.all(function(burger_data){

        console.log(burger_data);
        res.render("index", {burger_data}); //need to pass index to handlebars
    });
    
});

router.put('/burgers/update', function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

module.exports = router;

/* 
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

*/