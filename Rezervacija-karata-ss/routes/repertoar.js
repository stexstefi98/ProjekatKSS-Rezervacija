var express = require('express');
var router = express.Router();
var Model=require('./baza');

router.get('/repertoar', function(req, res, next) {
      Model.filmoviModel.find({},function(err,data){
        res.render('repertoar', { filmovi:data })
    })
});

module.exports = {router};