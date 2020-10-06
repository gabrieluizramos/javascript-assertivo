// Importa funções a serem testadas
import { loadDatabase, saveDatabase } from 'database/file.js';

// Realiza o mock das funções do módulo fs que lidam diretamente com o arquivo em disco
import { promises } from 'fs';
jest.mock('fs', () => ({
  promises: {
    writeFile: jest.fn(),
    readFile: jest.fn(),
  }
}));

// Realiza o mock do path do arquivo database
jest.mock('database/path.js');

// Espiona o logger
import logger from 'utils/logger.js';
const spies = {
  error: jest.spyOn(logger, 'error').mockImplementation()
};

// Limpa todas as funções de mock ao final de cada teste
afterEach(() => {
  jest.clearAllMocks();
});

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
describe('saveDatabase', () => {
  it('Salva dados com sucesso', async () => {
    const obj = {
      name: 'nome'
    };

    promises.writeFile.mockResolvedValueOnce()
    await saveDatabase(obj);

    expect(promises.writeFile).toHaveBeenCalledTimes(1);
    expect(promises.writeFile).toHaveBeenCalledWith(null, expect.any(String));
  });

  it('Dispara uma mensagem de erro caso não consiga salvar os dados da base', async () => {
    promises.writeFile.mockRejectedValueOnce('errow');

    await saveDatabase();

    expect(spies.error).toHaveBeenCalledTimes(1);
  });
});


describe('loadDatabase', () => {
  it('Carrega dados com sucesso', async () => {
    const buffer = '{ "nome": "qualquer" }';
    promises.readFile.mockResolvedValueOnce(buffer);

    const data = await loadDatabase();

    expect(promises.readFile).toHaveBeenCalledTimes(1);
    expect(typeof data).toEqual('object');
    expect(data.nome).toEqual('qualquer');
  });

  it('Dispara uma mensagem de erro caso não consiga ler os dados da base', async () => {
    promises.readFile.mockRejectedValueOnce('errow');

    await loadDatabase();

    expect(spies.error).toHaveBeenCalledTimes(1);
  });
});
