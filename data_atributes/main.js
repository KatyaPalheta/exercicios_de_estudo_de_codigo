const tecla = document.querySelectorAll("[data-tecla]");
//seleciona qualquer botão com o data-tecla

var conteudo = document.querySelector("[data-conteudo]");
//seleciona o conteudo que o botao vai alterar

tecla.forEach((elemento) => {
  //evento que aguarda o click de qualquer item do array
  elemento.addEventListener("click", (evento) => {
    adicionaLetra(evento.target.dataset.tecla);
  });
});

function adicionaLetra(tecla) {
  //var texto = document.querySelector("[data-conteudo]").innerHtml;
  var texto = conteudo.value;
  var digitacao = texto + tecla;
  conteudo.value = digitacao;
}
