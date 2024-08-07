const notFoundError = (res) => {
    return res.status(404).send("Dado não encontrado no Banco de dados");
};

module.exports = { notFoundError };
