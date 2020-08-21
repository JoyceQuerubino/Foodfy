const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//Adicionando os dados das receitas
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

     // Página de erro
     server.use(function (req,res) {
        res.status(404).render("not-found")
    }) 

    return res.render("home", {items: dados})
})

//Rota página sobre
server.get("/sobre", function (req , res){

    return res.render("sobre")
})

//Rota página de lista de receitas
server.get("/receitas", function (req , res){

    return res.render("receitas", {items: dados})
})

//Rota página de receita unica
server.get("/receita/:index", function(req,res) {
    const recipeIndex = req.params.index

    if (!dados[recipeIndex]) {
        return res.render('not-found')
    }
    return res.render('receita', { item: dados[recipeIndex]})
})


server.listen(5000, function() {
    console.log("server is running")
})

