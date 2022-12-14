const Pessoa = require('../models/pessoa');

const getPessoas = async (request, response)=>{

    const pessoas = await Pessoa.find({},{_id: false, email:true});
    response.status(200).send(pessoas);
};

const addPessoa = async (request, response) =>{
    const pessoa = new Pessoa(request.body);
    pessoa.save().then(()=>{
        response.status(200).send('Salvo com sucesso');
    }).catch(err=>{
        response.status(400).send('Falha ao salvar');
    });
};

module.exports = {getPessoas, addPessoa};