const GetPoliciesListByClientName = (req, res) => {
    const name = req.params.name;
    res.status(200).json(name);
}

const GetClientByPolicieNumber = (req, res) => {
    const id = req.params.id;
    res.status(200).json(id);
}

module.exports = {
    GetPoliciesListByClientName,
    GetClientByPolicieNumber,
}