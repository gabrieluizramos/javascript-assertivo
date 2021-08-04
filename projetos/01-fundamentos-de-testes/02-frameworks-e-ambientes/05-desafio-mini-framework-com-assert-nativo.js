const assert = require('assert');

const verifiqueQue = (valor) => {
    const assercoes = {
        ehExatamenteIgualA(esperado) {
          assert.strictEqual(valor, esperado);
        }
    };

    return assercoes;
}

const teste = (titulo, funcaoTeste) => {
	try {
		funcaoTeste();
		console.log(`✅ ${titulo} passou`);
	} catch (err) {
      console.log(`🚨 ${titulo} deu ruim... \n ${err.message}`);
	}
}

// trouxemos as funcoes
const somaHorasExtras = (salario, valorHorasExtras) => {
	return salario + valorHorasExtras;
};

const calculaDesconto = (salario, descontos) => {
	return salario - descontos;
};


teste('somaHorasExtras', () => {
	const esperado = 10;
	const retornado = somaHorasExtras(5, 5);

	verifiqueQue(retornado).ehExatamenteIgualA(esperado);
});
teste('calculaDesconto', () => {
	const esperado = 5;
	const retornado = calculaDesconto(10, 5);

	verifiqueQue(retornado).ehExatamenteIgualA(esperado);
});
