const frases = document.querySelector("#texto");
frases = addEventListener("click", function () {
  frases.innerText = "Já chegou";
});

const botaoVermelho = document.querySelector("#vermelho");
botaoVermelho = addEventListener("click", function () {
  frases.style.color = "magenta";
});

function mudarFrase() {
  frases.innerText = "Já chegou";
}

function mudarVermelho() {}
