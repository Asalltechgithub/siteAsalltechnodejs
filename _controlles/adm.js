const express = require('express')
const Router = express.Router()
const mongoose = require('mongoose')
require('../_models/service')
const Service = mongoose.model('service')


Router.get("/service",(req,res)=>{
Service.find().then((service)=>{
    console.log(service)
 res.render('Service',{service:service,layout: 'layoutadm.handlebars'})

})

   
})

Router.get("/service/addservice",(req,res)=>{

    res.render('addService', {layout: 'layoutadm.handlebars'});


})


Router.post("/service/add", (req,res)=>{

    const newService={

     name:req.body.name


    }

    new Service (newService).save().then(()=>{


console.log("Servico Registardo com Sucesso")

res.redirect('/adm/service')
    }).catch((err)=>{

        console.log("houve um erro ao registrar Servico "+err)
    })
 })


Router.get('/', (req,res)=>{

    Service.find().then((service)=>{

        
       res.render("home", {service:service} )

    })


   

})



 








module.exports = Router