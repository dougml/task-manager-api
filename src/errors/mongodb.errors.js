const notFoundError = (res) => {
    return res.status(404).send("Dado não encontrado no Banco de dados");
};
const objectIdCastError = (res) => {
    return res
        .status(500)
        .send("Erro ao recuperar esse dado do Banco de dados");
};

module.exports = { notFoundError, objectIdCastError };
