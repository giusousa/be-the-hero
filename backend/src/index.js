const express = require('express');     // Importa o módulo 'express' para a váriavel 'express'
const cors = require('cors');
const routes = require('./routes')

const app = express();                  // Cria uma variável para armazenar a aplicação (instanciar a aplicação)

app.use(cors());
app.use(express.json());                // Informa ao express que usaremos Json nas requisições ao servidor
app.use(routes);                        // Faz com que o app utilize um arquivo externo que contem as rotas disponíveis

                                
app.listen(3333);                       // Faz com que a aplicação ouça a porta em questão