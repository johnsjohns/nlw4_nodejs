import express from 'express';
const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */

 // http://localhost:3333/users
 app.get("/", (request, response) => {
     return response.json({ message: 'Hello World - NLW4'});
 });

// 1 param => Rota(Recurso API)
// 2 param => resquest, response

 app.post("/", (request, response) => {
     //Recebeu dados para salvar 
     return response.json({ message: 'Os dados foram salvos com sucesso!'})
 })
app.listen(3333, () => console.log("server is runnig"));