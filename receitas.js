import express from "express";
import { buscarReceitaPorId, buscarReceitasPorNomeOuTipo, buscarReceitas } from "./servicos/servico_receitas.js";

const app = express();

app.get('/receitas', (req, res) => {
  const receita = req.query.busca;
  const escolha = receita? buscarReceitasPorNomeOuTipo(receita): buscarReceitas();

  if (escolha.length > 0) {
    res.json(escolha);
  } else {
    res.status(404).send({"erro":"Não Foi Encontrado Nenhuma Receita"})
  }
});

app.listen(8080, () => {
  const data = new Date();
  console.log("Servidor inicial na porta 8080: " + data);
});