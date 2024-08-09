const bcryptjs = require("bcryptjs");

/**
 * 
 * Contraseña sin encriptar: hola.01
 * @param {*} passordPlain 
 */
const encrypt = async (passordPlain) => {
    const hash = await bcryptjs.hash(passordPlain, 10);
    return hash;
};

/**
 * 
 * Pasar contraseña sin encriptar y contraseña encriptada
 * @param {*} passordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passordPlain, hashPassword) => {
    return await bcryptjs.compare(passordPlain, hashPassword);
};

module.exports = { encrypt, compare };