const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require("../utils/handlePropertiesEngine");
const propertiesKey = getProperties();

/**
 * Debes de pasar el objeto del usuario
 * @param {*} user 
 */
const tokenSing = async (user) => {
    const sign = await jwt.sign(
        {
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn:"2h",
        }
    );

    return sign;
};

/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (e) {
        return null;
    }
};

module.exports = { tokenSing, verifyToken }