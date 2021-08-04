// funções a serem testadas
const somaHorasExtras = (salario, valorHorasExtras) => {
	return salario + valorHorasExtras;
};
const calculaDesconto = (salario, descontos) => {
	return salario - descontos;
};

// variáveis com os valores
let esperado = 10;
let retorno = somaHorasExtras(5, 5);

// testa testa função somaHorasExtras
if (esperado === retorno) {
	console.log(`✅ Teste passou`);
} else {
	console.error(`🚨 Ih, deu ruim...`);
}

esperado = 5;
retorno = calculaDesconto(10, 5);

// testa testa função calculaDesconto
if (esperado === retorno) {
	console.log(`✅ Teste passou`);
} else {
	console.error(`🚨 Ih, deu ruim...`);
}
