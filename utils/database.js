const {URL_CLIENTS, URL_POLICIES} = require('./constants');
const fetch = require('node-fetch');

const getClients =  () => {
    return new Promise((resolve, reject) => {
        fetch(URL_CLIENTS)
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            reject(err);
        })
        .then((myJson) => {
            resolve(myJson.clients);
        });
    });
    
}

const getClientRole =  (id) => {
    return new Promise((resolve, reject) => {
        fetch(URL_CLIENTS)
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            reject(err);
        })
        .then((myJson) => {
            const clients = myJson.clients;
            const client = clients.filter(clients => clients.id === id);
            resolve(client[0].role);
        });
    });
    
}


const getPolicies = async () => {
    return new Promise((resolve,reject) => {
        fetch(URL_POLICIES)
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            reject(err);
        })
        .then((myJson) => {
            resolve(myJson.policies);
        });
    });  
}

module.exports = {
    getClients,
    getPolicies,
    getClientRole
}