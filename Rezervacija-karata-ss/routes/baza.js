var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/korisnici', {useNewUrlParser: true,useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // povezani smo
  console.log('Povezani smo sa bazom')
});


var korisniciSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
        },
        sifra:{
            type:String,
            required:true
            }
  });

var korisnikModel = mongoose.model('korisnikModel', korisniciSchema);//model korisnika

var filmoviSchema = new mongoose.Schema({
  brojsale:{type:String,required:true},
  imefilma:{type:String,required:true},
  datumemitovanja:{type:String,required:true},
  vreme:{ type:String,required:true},
  brojSlobodnihMesta:{type:Number,required:true},
  link:{type:String,required:true},
        
  });

var filmoviModel=mongoose.model('filmoviModel',filmoviSchema)//model filma


module.exports={korisnikModel:korisnikModel,filmoviModel:filmoviModel};
