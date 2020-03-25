const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes);
app.listen(3333);

/*
Métodos HTTP:
GET: Buscar/listar uma informacao no BackEnd
POST: Criar uma informacao no BackEnd
PUT: Alterar uma informacao no BackEnd
DELETE: Deletar uma informacao no BackEnd

*/


/*
Tipos de parametros:
Query Paramns: Parametros nomeados enviados na rota após "?" (filtros, paginação)
Route Params: Parametros utilizados para identificar recursos 
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB
*/

