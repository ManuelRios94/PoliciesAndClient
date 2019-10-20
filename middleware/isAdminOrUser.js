const { UNAUTHORIZED, BAD_REQUEST, ROLE_ADMIN, ROLE_USER } = require('../utils/constants');
const { getClientRole } = require('../utils/database');

module.exports = async (req, res, next) => {

    const token = req.headers["x-access-token"] || req.headers["authorization"];
    
    if (!token){
        return res.status(UNAUTHORIZED).send("Access denied. No token provided.");
    } 

    await getClientRole(token)
    .then((role) => {
        if(role === ROLE_ADMIN || role === ROLE_USER){
            next();
        } else {
            return res.status(UNAUTHORIZED).send("Access denied. Not allowed to do this action.");
        }
    })
    .catch((err) => {
        return res.status(BAD_REQUEST).send("Invalid token.");
    });

  };