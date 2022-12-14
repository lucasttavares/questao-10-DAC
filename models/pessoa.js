const mongoose = require('../database/db');

const pessoaSchema = new mongoose.Schema({
    email: {type: String, unique: true}
});

const Pessoa = mongoose.model('pessoa', pessoaSchema);

module.exports = Pessoa;