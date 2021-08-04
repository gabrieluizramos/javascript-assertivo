// Cliente
import * as storage from '../../clients/storage';

describe('Cliente de Armazenamento', () => {
  const client = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Consulta dados pela chave de usuário', () => {
    client.getItem.mockReturnValueOnce('{}');
    storage.getData({ client });

    expect(client.getItem).toHaveBeenCalledTimes(1);
    expect(client.getItem).toHaveBeenCalledWith(storage.STORAGE_KEY);
  });

  it('Insere dados pela chave de usuário', () => {
    storage.setData({ client });

    expect(client.setItem).toHaveBeenCalledTimes(1);
    expect(client.setItem).toHaveBeenCalledWith(storage.STORAGE_KEY, '{}');
  });

  it('Remove dados pela chave de usuário', () => {
    storage.removeData({ client });

    expect(client.removeItem).toHaveBeenCalledTimes(1);
    expect(client.removeItem).toHaveBeenCalledWith(storage.STORAGE_KEY);
  });

  it('Retorna true/false caso tenha ou não dados de usuário', () => {
    client.getItem.mockReturnValueOnce('{}');
    expect(storage.hasData({ client })).toEqual(true);

    client.getItem.mockReturnValueOnce(null);
    expect(storage.hasData({ client })).toEqual(false);
  });
});

it('Limpa cookie com uid', () => {
  const cookieClient = {
    cookie: ''
  };

  const expires = storage.clearCookie({ client: cookieClient });

  expect(cookieClient.cookie).toEqual(expect.stringContaining('uid'));
  expect(expires).toEqual(expect.stringContaining('uid'));
});
