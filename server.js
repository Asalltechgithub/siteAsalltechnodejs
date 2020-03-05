const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = require ("express-handlebars");
const Adm = require('./_controlles/adm');
const email=require('./_controlles/email');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.use("/",Adm)
app.use("/adm",Adm)
app.use("/email",email)
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/asalltech"
).then(() => { console.log("conectado com sucesso") }
).catch((err) => { console.log("houve um erro"+ err) })

app.listen(3000 , ()=>{

    console.log("OK")

})