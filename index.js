import express from 'express'
const app = express()

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.sendFile(__dirname+'/conteúdo/inicio.html')
})

app.get('/produtos', function(req, res){
    res.sendFile(__dirname+'/conteúdo/produtos.html')
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname+'/conteúdo/sobre.html')
})
app.listen(3800, ()=>{
    console.log("Servidor rodando em http://localhost:3800")
})
