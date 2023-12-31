function calcularMedia( notas ) {

  let soma = 0;
  for( c = 0; c < notas.length; c++) {
      soma += notas[c];
  }

  media = soma / notas.length;

  return media;

}

let media; // escopo global

function aprovacao( notas ) {

  let media = calcularMedia( notas ); // escopo da função

  let condicao = media >= 8 ? "aprovado" : "reprovado";

  return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

  console.log(numero);  
  
  let proximoNumero = numero - 1;

  if(proximoNumero > 0)
      contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/* 
* Formulário envio de dados para cálculo da média 
*/
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
  formulario1.addEventListener('submit', function( evento ){

      evento.preventDefault();
      evento.stopPropagation();

      if( this.getAttribute('class').match(/erro/) ) {
          return false;
      }
      
      let dados = new FormData(this);

      let notas = [];

      for(let key of dados.keys()) {

          let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

          if(!isNaN(numero)) {
              notas.push(numero);
          }

      }

      console.log(notas);

      texto = aprovacao(notas)

      document.getElementById('resultado').innerHTML = texto;

  });


function validaCampo(elemento){

  elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      if(this.value == ""){
          document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho.";
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          return false;
      } else {
          document.querySelector('.mensagem').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
      }

  });

}

function validaCampoNumerico(elemento) {
  elemento.addEventListener('focusout', function(event) {
    event.preventDefault();

    let cep = this.value.trim();

    if (/^\d{5}-\d{3}$/.test(cep)) {
      document.querySelector('.mensagem').innerHTML = "";
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    } else {
      document.querySelector('.mensagem').innerHTML = "Informe o CEP no formato correto ex: 12345-678.";
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
      return false;
    }
  });
}



function validaEmail(elemento){

  elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
      if(this.value.match(emailValido)) {
          document.querySelector('.mensagem').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
      } else {
          document.querySelector('.mensagem').innerHTML = "Informe um endereço de e-mail válido ex seuemail@email.com.";
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          return false;
      }

  });

}


function validaUF(elemento) {
  elemento.addEventListener('focusout', function(event) {
    event.preventDefault();

    let uf = this.value.trim();

    if (/^[A-Za-z]{2}$/.test(uf)) { 
      document.querySelector('.mensagem').innerHTML = "";
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    } else {
      document.querySelector('.mensagem').innerHTML = "Informe a UF corretamente ex: SP.";
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
    }
  });
}



let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let campoUF = document.querySelectorAll('input.uf');


for( let emFoco of camposObrigatorios) {
  validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
  validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
  validaEmail(emFoco);
}

for( let emFoco of campoUF) {
  validaUF(emFoco);
}