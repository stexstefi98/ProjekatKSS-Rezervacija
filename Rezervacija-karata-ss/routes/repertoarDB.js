var express = require('express');
var router = express.Router();
var Model=require('./baza');

router.get('/repertoarDB', function(req, res, next) {
  res.render('repertoarDB', { title: 'Express' });
});
router.post('/repertoarDB', function(req, res, next) {
    brojsale1=req.body.brojsale;
    imefilma1=req.body.imefilma;
    datumemitovanja1=req.body.datum;
    vreme1=req.body.vreme;
    brojSlobodnihMesta1=req.body.brojmesta;
    link1='/karta/'+ req.body.brojsale;

    console.log(req.body.brojsale)
    console.log(req.body.imefilma)
    console.log(datumemitovanja1)
    console.log(req.body.vreme)
    console.log(req.body.brojmesta)

      var Film = new Model.filmoviModel(
        { 
            brojsale:brojsale1,
            imefilma:imefilma1,
            datumemitovanja:datumemitovanja1,
            vreme:vreme1,
            brojSlobodnihMesta:brojSlobodnihMesta1,
            link:link1
        }
        ).save().then(res.send('Uspesno upisano'));
   
});

module.exports = router;