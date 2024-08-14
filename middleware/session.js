const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const getProperties = require("../utils/handlePropertiesEngine");
const propertiesKey = getProperties();

const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401);
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken){
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
            return
        }

        /*if(!dataToken._id){
            handleHttpError(res, "ERROR_ID_TOKEN", 401);
            return
        }*/ 

        //const user = await usersModel.findById(dataToken._id); Uso exclusivo para Mongo
        const query = {
            [propertiesKey.id]: dataToken[propertiesKey.id]
        }
        const user = await usersModel.findOne(query); // Uso para ambos
        req.user = user;

        next();
    } catch (e) {
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

module.exports = authMiddleware