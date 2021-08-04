// Cliente
import * as auth from '../../../clients/http/authentication';

// Endpoints
import endpoints from '../../../clients/http/endpoints';

// Mocks
import { profile as mockProfile } from '../../../mocks/profile';
import * as storage from '../../../clients/storage';
jest.mock('../../../clients/storage.js');

describe('Cliente de autenticação', () => {
  it('Realiza login e armazena os dados localmente', async () => {
    const client = {
      post: jest.fn().mockResolvedValue(mockProfile)
    };

    const password = 'senha super secreta';

    const user = await auth.logIn({
      client,
      username: mockProfile.userName,
      password
    });

    expect(user).toEqual(mockProfile);

    expect(client.post).toHaveBeenCalledTimes(1);
    expect(client.post).toHaveBeenCalledWith(endpoints.authentication, {
      username: mockProfile.userName,
      password
    });

    expect(storage.setData).toHaveBeenCalledTimes(1);
    expect(storage.setData).toHaveBeenCalledWith({ data: user });
  });
});
