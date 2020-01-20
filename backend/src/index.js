// metodos http
// get para buscar informação, recebendo informação
// post para criar informação, cadastrar, criar e afins
// put editar algo ou informação
// delete para deletar informações 

// Tipos de parametros: 
// query params:req.query(filtros, ordenação, paginação...)
// route params: request.params(identificar um recurso na alteração ou remoção)
// body: request.body(dados para criação ou alteração de um registro)
//MongoDB(não-relacional)
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const http = require('http')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)
mongoose.connect('mongodb+srv://admin:admin123@cluster0-azndi.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,   
})
app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)