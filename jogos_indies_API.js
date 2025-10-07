import express from "express";
import {buscarJogos, buscarJogosPorNomeOuGenero, buscarJogoPorId} from "./servicos/servicos_jogos.js";
const app = express();

app.get('/jogos', (req, res) => {
    const nome_genero = req.query.busca;
    const bifurcacao = nome_genero? buscarJogosPorNomeOuGenero(nome_genero): buscarJogos();

    if (bifurcacao.length > 0) {
        res.json(bifurcacao);
    } else {
        res.status(404).send({"erro":"Nenhum Jogo Encontrado"});
    }
});

app.get('/jogos/:id', (req, res) => {
    const id = buscarJogoPorId(req.params.id);

    if(id) {
        res.json(id)
    } else if (isNaN(parseInt(req.params.id))) {
        res.status(400).send({"erro":"Requisição Inválida"})
    } else {
        res.status(404).send({"erro":"Nenhum Jogo Encontrado"});
    }
});

app.listen(8080, () => {
    const data = new Date();
    console.log("Servidor iniciado na porta 8080: " + data);
})
