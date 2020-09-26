const funcaoInterna = () => {
  console.log('salvar algum dado');
}

const falsoPositivo = () => {
  funcaoInterna();
  return 'texto qualquer';
}

module.exports = {
  falsoPositivo
};
