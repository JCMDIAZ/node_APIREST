require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const openApiConfigration = require("./docs/swagger");
const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger");
const dbConnectNoSql = require('./config/mongo');
const {dbConnectMySQL} = require("./config/mysql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development'

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

morganBody(app,{
    noColors:true,
    stream: loggerStream,
    skip: function(req, res) {
      return res.statusCode < 400
    }
})

const port = process.env.port || 3000;

/**
 * Definir ruta de documentación
 */

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfigration))

/**
 * Aqui invocamos a las rutas
 */

app.use("/api",require("./routes"));

if(NODE_ENV !== 'test'){
  app.listen(port);
  /*app.listen(port, () => {
      console.log(`Tu puerto esta lista por http://localhost:${port}`);
  });*/
}

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySQL();

module.exports = app;