// Cliente
import * as profiles from '../../../clients/http/profiles';

// Endpoints
import endpoints from '../../../clients/http/endpoints';

// Mocks
import { profile as mockProfile } from '../../../mocks/profile';

describe('Cliente de Perfis', () => {
  const client = {
    get: jest.fn(),
    delete: jest.fn(),
    patch: jest.fn(),
    post: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Realiza a consulta de perfis', () => {
    profiles.getProfiles({ client });

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(client.get).toHaveBeenCalledWith(endpoints.users);
  });

  it('Cadastra um novo perfil', () => {
    profiles.createProfile({ client, information: mockProfile });

    expect(client.post).toHaveBeenCalledTimes(1);
    expect(client.post).toHaveBeenCalledWith(endpoints.user, mockProfile);
  });

  it('Atualiza um perfil', () => {
    profiles.updateProfile({ client, ...mockProfile });

    expect(client.patch).toHaveBeenCalledTimes(1);
    expect(client.patch).toHaveBeenCalledWith(endpoints.user, mockProfile);
  });

  it('Deleta um perfil', () => {
    const { uid } = mockProfile;
    profiles.deleteProfile({ client, uid });

    expect(client.delete).toHaveBeenCalledTimes(1);
    expect(client.delete).toHaveBeenCalledWith(endpoints.user, { data: { uid } });
  });
});
