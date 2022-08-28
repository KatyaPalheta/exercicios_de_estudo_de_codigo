/* Lembretes para uso desse código
 * 1 - botao de envio do form inicia desabilitado e apenas habilita com e-mail valido
 * 2 - validação do e-mail segue padrão do navegador, apenas verifica se há @ no texto
 * 3 - desabilitar mensagens automaticas do formulario desabled
 * 4 - replicar efeito em varios inputs
 */

const form = document.getElementById('form_email');
const email = document.getElementById('in_email');
const span = document.getElementById('mensagem_email');
const botao = document.getElementById('send_email');

function teste() {
	const valida = email.validity.valid;
	console.log(valida);
	if (valida === false) {
		email.classList = 'email erro_email';
		span.classList = 'span mensagem_erro_email';
	} else {
		email.classList.remove('erro_email');
		span.classList.remove('mensagem_erro_email');
		botao.disabled = false;
	}
}
