const notAllowedFiledsToUpdate = (res) => {
    return res.status(500).send("Um ou mais campos não são editáveis");
};

module.exports = { notAllowedFiledsToUpdate };
