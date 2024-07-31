const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

/**
 * Traer un listado
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    //const data = ["hola", "mundo", "todos"];

    try{
        const data = await tracksModel.find({});
        res.send({data});
    } catch(e) {
        handleHttpError(res,"ERROR_GET_ITEMS");
    };
};

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data});
    } catch (e) {
        console.log(e);
        handleHttpError(res,"ERROR_GET_ITEM");
    }
};

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try{
        const body = matchedData(req);
        const data = await tracksModel.create(body);
        res.send({ data });
    } catch(e) {
        handleHttpError(res,"ERROR_CREATE_ITEMS");
    };
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findByIdAndUpdate(
            id, body
        );
        res.send({ data });
    } catch(e) {
        handleHttpError(res,"ERROR_UPDATE_ITEMS");
    };
};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.delete({_id:id});
        res.send({data});
    } catch (e) {
        console.log(e);
        handleHttpError(res,"ERROR_DELETE_ITEM");
    }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }