require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger");
const dbConnect = require('./config/mongo');
const app = express();

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
 * Aqui invocamos a las rutas
 */

app.use("/api",require("./routes"));

app.listen(port, () => {
    console.log(`Tu puerto esta lista por http://localhost:${port}`);
});

dbConnect();