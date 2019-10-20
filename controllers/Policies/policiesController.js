const { getClients, getPolicies } = require('../../utils/database');
const {OK, NOT_FOUND, BAD_REQUEST} = require('../../utils/constants');

const GetPoliciesListByClientName =  (req, res) => {
    const name = req.params.name;
    // await getClients()
    // .then((clients) => {
    //     const clientsToSearch = clients.filter(clients => clients.name === name);
    //     if(result !== []){
    //         res.status(OK).json(result); 



    //     } else {
    //         res.status(NOT_FOUND).json(result); 
    //     }
    //     // For each clientsToSearch assosiate
    //     await getPolicies()
    //     .then((policies) => {
    //         const result = policies.filter(policies => policies.client_id === client_id);
    //         res.status(OK).json(result); 
    //     })
    //     .catch(() => {
    //         res.status(BAD_REQUEST);
    //     }); 
    // })
    // .catch(() => {
    //     res.status(BAD_REQUEST);
    // });

    
}

const GetClientByPolicieNumber = (req, res) => {
    const id = req.params.id;
    res.status(200).json(id);
}

module.exports = {
    GetPoliciesListByClientName,
    GetClientByPolicieNumber,
}