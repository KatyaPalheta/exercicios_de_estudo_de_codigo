async function buscaEndereco(cep) {
	var mensagemErro = document.getElementById('erro');
	mensagemErro.innerHTML = '';
	try {
		var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`); //concatecação de variavel dentro do valor
		var consultaCepConvertida = await consultaCEP.json();
		if (consultaCepConvertida.erro) {
			throw Error('CEP não existente!');
		}
		var cidade = document.getElementById('cidade');
		var logradouro = document.getElementById('endereco');
		var bairro = document.getElementById('bairro');
		var estado = document.getElementById('estado');

		cidade.value = consultaCepConvertida.localidade;
		logradouro.value = consultaCepConvertida.logradouro;
		bairro.value = consultaCepConvertida.bairro;
		estado.value = consultaCepConvertida.uf;

		console.log(consultaCepConvertida);

		return consultaCepConvertida;
	} catch (erro) {
		mensagemErro.innerHTML = `<p>CEP inválido.Tente novamente!</p>`;
		console.log(erro);
	}
}

buscaEndereco();

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
