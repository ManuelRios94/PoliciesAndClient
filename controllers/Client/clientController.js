const { getClients } = require('../../utils/database');
const {OK, NOT_FOUND, BAD_REQUEST} = require('../../utils/constants');

const GetClientById = async (req, res) => {
    const id = req.params.id;
    await getClients()
    .then((clients) => {
        const result = clients.filter(clients => clients.id === id);
        if(result !== []){
            res.status(OK).json(result); 
        } else {
            res.status(NOT_FOUND); 
        } 
    })
    .catch(() => {
        res.status(BAD_REQUEST);
    });
}

const GetClientByName = async (req, res) => {
    const name = req.params.name;;
    await getClients()
    .then((clients) => {
        const result = clients.filter(clients => clients.name === name);
        if(result !== []){
            res.status(OK).json(result); 
        } else {
            res.status(NOT_FOUND); 
        }
    })
    .catch(() => {
        res.status(BAD_REQUEST);
    });
}

module.exports = {
    GetClientById,
    GetClientByName,
}