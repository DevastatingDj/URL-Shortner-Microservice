var express = require('express');
var URL = require('../models/url_model');
var dns = require('dns');

function router() {
    var urlRouter = express.Router();
    urlRouter.route('/').post(function(req, res){
        var originalurl = req.body.url,
            shorturl = Math.floor(Math.random()*1000);
        dns.lookup(originalurl, function(err, add, family){
    if (err){
        console.log(err);
        res.json({"error": "invalid url"});
    }  
    else {
        URL.findOne({"original_url": originalurl}, function(err, object){
            if(err || object == null) {
                var newURL = new URL({
                                    "original_url": originalurl,"short_url": shorturl
                                });
                newURL.save();
                res.status(201).json({
                "original_url": originalurl,"short_url": shorturl
                });
            }
                
            else {
                res.status(201).json(object);
            }
        });
    } 
});
         
    });
    
    urlRouter.route('/:shortHand').get(function(req, res){
       URL.findOne({"short_url": req.params.shortHand}, function(err, object){
           console.log(req.params.shortHand);
           if(err || object == null) res.json({
               "error" : "Enter a valid short hand url"
           });
           else {    
           res.redirect("https://" + object.original_url);
           }
       }); 
    });

    return urlRouter;
}

module.exports = router;