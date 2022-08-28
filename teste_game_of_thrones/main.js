const frases = document.querySelector('#texto');
frases.addEventListener('click', function () {
	frases.innerHTML = 'Já chegou';
});

function mudar(x) {
	x.style.background = 'green';
}

const botaoVermelho = document.querySelector('#vermelho');
botaoVermelho.addEventListener('click', function () {
	frases.style.background = 'magenta';
});
