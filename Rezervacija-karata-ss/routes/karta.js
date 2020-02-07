var express = require('express');
var router = express.Router();
var filmovi=require('./repertoar');
var Model=require('./baza');


router.get('/karta/:broj', function(req, res, next) {
 console.log(req.params.broj);
 var BSM;
    console.log(typeof(req.params.broj))
    Model.filmoviModel.findOne({brojsale:req.params.broj},function(err,data){
        
        BSM=data.brojSlobodnihMesta-1;
        
        if(BSM>1){
        Model.filmoviModel.updateOne({brojsale:req.params.broj},
            {$set:{brojSlobodnihMesta:BSM}},function(err){}).then(res.render('kupljenaKarta',{Film:data}));
        }
        else{
            res.send('Nema dovoljno karata');
        }
    })
      
})
    
router.post('/karta',(req,res,next)=>{
//Zavrsi bazu
})
module.exports = router;