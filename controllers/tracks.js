const { tracksModel } = require('../models')

/**
 * Traer un listado
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    //const data = ["hola", "mundo", "todos"];
    const data = await tracksModel.find({});
    res.send({data});
};

/**
 * Traer un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await tracksModel.create(body)
    res.send({data})
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }