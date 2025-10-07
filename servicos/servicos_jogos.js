import colecaoJogos from "../dados/dados_jogos.js";

export const buscarJogos = () => {
    return colecaoJogos;
};

export const buscarJogosPorNomeOuGenero = (nome_genero) => {
    let parametro_Nome = colecaoJogos.filter(resultado => resultado.nome.toLowerCase().includes(nome_genero.toLowerCase()));

    if (parametro_Nome.length > 0) {
        return parametro_Nome;
    } else {
        return colecaoJogos.filter(resultado => resultado.genero.toLowerCase().includes(nome_genero.toLowerCase()));
    }
};

export const buscarJogoPorId = (id) => {
    const idJogo = parseInt(id);
    return colecaoJogos.find(resultado => resultado.id === idJogo);
};