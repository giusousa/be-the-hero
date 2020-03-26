const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes  = express.Router();


/**
 * Rota / Recurso
 */

/**
 * 
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação
 * POST: Criar uma informação
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 * 
 */

/**
 * 
 * Tipos de parâmetros
 * 
 *  Query Params: Parâmetros nomeados enviados na rota após '?' (Filtro, paginação)         (request.query) ex. app.get('/users?name=Diego', (req, res) => {...})
 *  Route Params: Parâmetros utilizados para idenficar recursos                             (request.params) ex. app.get('/users/:id', (req, res) => {...})
 *  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos             (request.body)
 * 
 */

routes.post('/sessions', SessionController.create);


routes.post('/ongs', OngController.create);     
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);


routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;        // Permite a exportação da váriavel 'routes'.
