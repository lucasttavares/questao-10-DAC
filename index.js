const express = require('express');
const app = express();
app.use(express.json());
const pessoaController = require('./controllers/PessoaController');

app.get('/pessoas', pessoaController.getPessoas);

app.post('/pessoas', pessoaController.addPessoa);


app.listen(3001, ()=>{
    console.log(`API rodando`);
});