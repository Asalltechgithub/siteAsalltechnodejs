const nodemailer = require('nodemailer');
const express= require("express")
const mongoose = require('mongoose')
const Router = express.Router()
require('../_models/service')

const Service = mongoose.model('service')

Router.post("/send",(req, res)=>{

    Service.findOne({_id:req.body.solicitacao}).then((service)=>{


const servico =service.name


const cliente =req.body.cliente
const email =req.body.email
const assunto =servico
const menssagem=req.body.descricao



const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
     port: 465,
      secure: true, 
    auth: {
        user: "cliente.asalltech@gmail.com",
        pass: "ally230600"
    },
    tls: { rejectUnauthorized: false }
  });


  const mailOptions = {
    from: 'cliente.asalltech@gmail.com',
    to: 'contato.asalltech@gmail.com',
    subject:cliente +"  "+ assunto,
    text: email+"  "+ menssagem
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);

      res.redirect("/")
    }
  });
    })

})

module.exports=Router







