document.getElementById("formPrestacao").addEventListener("submit", function(evento) {
  evento.preventDefault(); 

  let valor = parseFloat(document.getElementById("valor").value);
  let entrada = parseFloat(document.getElementById("entrada").value);
  let prestacao = parseFloat(document.getElementById("prestacao").value);

  let quantidadePrestacoesCarro = calcularPrestacoes(valor, entrada, prestacao);

  document.getElementById("resultado").textContent = "Quantidade de prestações restantes: " + quantidadePrestacoesCarro;
});

function calcularPrestacoes(valorTotal, entrada, prestacao) {
  let valorRestante = valorTotal - entrada;
  let quantidadePrestacoes = (valorRestante / prestacao);
  return quantidadePrestacoes;
}