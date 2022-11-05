async function buscaEndereco() {
	try {
		var consultaCEP = await fetch('https://viacep.com.br/ws/01001300/json/');
		var consultaCepConvertida = await consultaCEP.json();
		if (consultaCepConvertida.erro) {
			throw Error('CEP não existente!');
		}
		console.log(consultaCepConvertida);
	} catch (erro) {
		console.log(erro);
	}
}

buscaEndereco();
