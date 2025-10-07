import colecaoReceitas from "../dados/dados_receitas.js";

export const buscarReceitas = () => {
    return colecaoReceitas
};

export const buscarReceitasPorNomeOuTipo = (termo) => {
    return colecaoReceitas.filter(receita => receita.nome.toLowerCase().includes(termo.toLowerCase()) || receita.tipo.toLowerCase().includes(termo.toLowerCase()))
};

export const buscarReceitaPorId = (id) => {
    idReceita = parseInt(id);
    return colecaoReceitas.find(idReceita === id)
};