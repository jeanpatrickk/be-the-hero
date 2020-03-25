/**
 * Rota / Recurso 
 * geralemente atrelado a algum recurso que 
 * iremos utilizar na aplicação
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar/retornar uma informação do back-end como o dados de um user
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *   
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação). 
 * const params = request.query;
 * 
 * Route Params: Parâmetros utilizados para identificar recursos (/users/:id) precisa do ":" e após identificar o retorno é 'id:1' por exemplo. 
 * const params = request.params;
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. Recebe um arquivo json. 
 * const params = request.body
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()  ===> melhor opção
 */
const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;
