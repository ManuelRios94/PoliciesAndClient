const GetClientById = (req, res) => {
    const id = req.params.id;
    res.status(200).json(id); 
}

const GetClientByName = (req, res) => {
    const name = req.params.name;
    res.status(200).json(name);
}

module.exports = {
    GetClientById,
    GetClientByName,
}