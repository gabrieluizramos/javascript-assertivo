/* eslint-disable */

// função teste reutilizável
const teste = (titulo, esperado, retornado) => {
    if (esperado === retornado) {
        console.log(`✅  ${titulo} passou`);
    } else {
        console.log(`🚨 ${titulo} deu ruim...`);
    }
}

// duplicamos as funções apenas para vermos as diferenças
const somaHorasExtras = (salario, valorHorasExtras) => {
	return salario + valorHorasExtras;
};

const calculaDesconto = (salario, descontos) => {
	return salario - descontos;
};


teste('somaHorasExtras', 10, somaHorasExtras(5, 5));
teste('calculaDesconto', 5, calculaDesconto(10, 5));