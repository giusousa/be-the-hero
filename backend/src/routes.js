const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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


routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);  

routes.get('/ongs', OngController.index);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


routes.post('/incidents', IncidentController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


module.exports = routes;        // Permite a exportação da váriavel 'routes'.
