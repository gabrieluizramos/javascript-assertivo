// Actions
import * as actions from '../../../store/user/actions';

// Mocks
import { profile } from '../../../mocks/profile';
import * as auth from '../../../clients/http/authentication';
jest.mock('../../../clients/http/authentication');

describe('Creators', () => {
  it.each([
    ['authenticating', actions.AUTHENTICATE_PENDING, undefined],
    ['authenticateSuccess', actions.AUTHENTICATE_SUCCESS, profile],
    ['authenticateError', actions.AUTHENTICATE_ERROR, 'Ocorreu um erro'],
    ['clearAuthentication', actions.LOGOUT, undefined]
  ])('%s deve criar uma ação com o tipo %s', (creator, type, payload) => {
    const action = actions[creator](payload);

    expect(action.type).toEqual(type);
    expect(action.payload).toEqual(payload);
  });
});

describe('Login thunk', () => {
  afterEach(() => {
    jest.clearAllMocks()
  });

  it('Deve disparar as ações de login com sucesso', async () => {
    auth.logIn.mockResolvedValueOnce(profile);
    const dispatch = jest.fn();
    const password = 'senha qualquer';

    await actions.login(profile.userName, password)(dispatch);

    expect(auth.logIn).toHaveBeenCalledTimes(1);
    expect(auth.logIn).toHaveBeenCalledWith({
      username: profile.userName,
      password
    });

    expect(dispatch.mock.calls).toEqual([
      [actions.authenticating()],
      [actions.authenticateSuccess(profile)]
    ]);
  });

  it('Deve disparar as ações de login com erro', async () => {
    const erro = 'Mensagem de erro';
    auth.logIn.mockRejectedValueOnce(erro);
    const dispatch = jest.fn();
    const password = 'senha qualquer';

    await actions.login(profile.userName, password)(dispatch);

    expect(auth.logIn).toHaveBeenCalledTimes(1);
    expect(auth.logIn).toHaveBeenCalledWith({
      username: profile.userName,
      password
    });

    expect(dispatch.mock.calls).toEqual([
      [actions.authenticating()],
      [actions.authenticateError(erro)]
    ]);
  });
});

describe('Logout thunk', () => {
  it('Deve chamar o cliente que realiza o logout e disparar a ação correta', async () => {
    auth.logOut.mockResolvedValueOnce();
    const dispatch = jest.fn();

    await actions.logout()(dispatch);

    expect(auth.logOut).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(actions.clearAuthentication());
  });
});

describe('Check authentication thunk', () => {
  it('Com usuário autenticado', () => {
    auth.isLoggedIn.mockReturnValueOnce(true);
    auth.getLoggedUser.mockReturnValueOnce(profile);
    const dispatch = jest.fn();

    actions.checkAuthentication()(dispatch);

    expect(dispatch.mock.calls).toEqual([
      [{ type: actions.CHECK_AUTHENTICATION }],
      [actions.authenticateSuccess(profile)]
    ]);
  });

  it('Dispara somente check authentication caso usuário não esteja autenticado', () => {
    auth.isLoggedIn.mockReturnValueOnce(false);
    const dispatch = jest.fn();

    actions.checkAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: actions.CHECK_AUTHENTICATION
    });
  });
});
