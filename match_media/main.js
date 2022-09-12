const media = matchMedia('(min-width: 600px)');
media.addEventListener('change', (e) => {
	const estado = e;
	console.log(e);
	console.log(estado.matches);
});
