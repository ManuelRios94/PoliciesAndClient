const { getClients, getPolicies } = require('../../utils/database');
const {OK, NOT_FOUND, BAD_REQUEST} = require('../../utils/constants');

const GetPoliciesListByClientName =  async (req, res) => {
    const clientName = req.params.name;
    await getClients()
    .then(async (clients) => {
        const client = clients.filter(clients => clients.clientName === clientName);
        if(client !== []){
            await getPolicies()
            .then((policies) => {
                const results = policies.filter(policies => policies.clientId === client[0].id);
                res.status(OK).json(results); 
            })
            .catch(() => {
                res.status(BAD_REQUEST);
            }); 
        } else {
            res.status(NOT_FOUND); 
        }
       
    })
    .catch(() => {
        res.status(BAD_REQUEST);
    });

    
}

const GetClientByPolicieNumber = async (req, res) => {
    const policieId = req.params.id;
    await getPolicies()
    .then(async (policies) => {
        const result = policies.filter(policies => policies.id === policieId);
        if( result !== []){
            await getClients()
            .then(async (clients) => {
                const client = clients.filter(clients => clients.id === result[0].clientId);
                res.status(OK).json(client); 
            })
            .catch(() => {
                res.status(BAD_REQUEST);
            });
        } else {
            res.status(NOT_FOUND);
        }
    })
    .catch(() => {
        res.status(BAD_REQUEST);
    }); 
}

module.exports = {
    GetPoliciesListByClientName,
    GetClientByPolicieNumber,
}