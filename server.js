const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//Adicionando os dados
const dados = require("./data")

// Adicionando CSS
server.use(express.static('public'))

server.set("view engine" , "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache:true
})

// Rota da página home
server.get("/", function (req, res){
    return res.render("home", {items: dados})
})

//Rota página sobre
server.get("/sobre", function (req , res){
    return res.render("sobre")
})

//Rota página receitas
server.get("/receitas", function (req , res){
    return res.render("receitas", {items: dados})
})

server.listen(5000, function() {
    console.log("server is running")
})

