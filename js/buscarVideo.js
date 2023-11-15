import { conectaApi } from "./conectaApi.js";

async function buscaVideo(evento) {
  evento.preventDefault();
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);
}

const botaoDePesquisa = document.querySelector("data-botao-pesquisa");

botaoDePesquisa.addEventListener("click", (evento) => buscaVideo(evento));