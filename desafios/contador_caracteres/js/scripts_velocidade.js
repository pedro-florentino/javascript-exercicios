const texto = document.querySelector("#texto");
const textArea = document.querySelector("#input");
const reiniciar = document.querySelector("#reiniciar");
const resultado = document.querySelector("#resultado");
const historico = document.querySelector("#historico");

const textos = [
  "Exemplo de texto para digitar.",
  "Outro exemplo de texto para digitar.",
  "Mais um exemplo de texto para digitar.",
  "Digite isso.",
  "Você pode digitar isso aqui.",
];

function novoTexto() {
  const index = Math.floor(Math.random() * textos.length);
  texto.textContent = textos[index];
}

function iniciar() {
  const statusDoTeste = JSON.parse(localStorage.getItem("testeEmAndamento"));

  if (!statusDoTeste) {
    localStorage.setItem("tempoInicial", new Date().getTime());
    localStorage.setItem("testeEmAndamento", true);
  }
}

function verificar() {
  const tempoFinal = new Date().getTime();
  const tempoGasto =
    (tempoFinal - parseInt(localStorage.getItem("tempoInicial"))) / 1000;
  resultado.textContent = `Parabéns! Você levou ${tempoGasto} segundos.`;
  // Incrementar histórico de pontuações
  adicionarAoHistorico(texto.textContent, tempoGasto);

  localStorage.setItem("testeEmAndamento", false);
  textArea.value = "";
  novoTexto();
}

function adicionarAoHistorico(textoDigitado, tempoGasto) {
  const itemHistorico = document.createElement("p");
  itemHistorico.textContent = `Texto: "${textoDigitado}" - Tempo: ${tempoGasto} segundos`;
  historico.appendChild(itemHistorico);
}

function atualizarTeste() {
  iniciar();
  if (textArea.value === texto.textContent) {
    verificar();
  }
}

function reiniciarTeste() {
  textArea.value = "";
  resultado.textContent = "";
  novoTexto();
  localStorage.setItem("testeEmAndamento", false);
  historico.innerHTML = "";
}

textArea.addEventListener("keyup", atualizarTeste);
reiniciar.addEventListener("click", reiniciarTeste);

novoTexto();
