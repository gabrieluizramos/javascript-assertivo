import reducer, { INITIAL_STATE } from '../../../store/user/reducer';
import * as actions from '../../../store/user/actions';

import { profile } from '../../../mocks/profile';

describe('Reducer de usuário', () => {
  it('AUTHENTICATE_PENDING', () => {
    const state = reducer(INITIAL_STATE, actions.authenticating());

    expect(state.status).toEqual(actions.LOADING_STATUS.LOADING);
  });

  it(`AUTHENTICATE_PENDING quando o usuário é admin`, () => {
    const dados = {
      ...profile,
      role: 'ADMIN'
    };
    const state = reducer(INITIAL_STATE, actions.authenticateSuccess(dados));

    expect(state.status).toEqual(actions.LOADING_STATUS.LOADED);
    expect(state.info).toEqual(dados);
    expect(state.authenticated).toEqual(true);
    expect(state.admin).toEqual(true);
  });

  it(`AUTHENTICATE_PENDING quando o usuário não é admin`, () => {
    const state = reducer(INITIAL_STATE, actions.authenticateSuccess(profile));

    expect(state.status).toEqual(actions.LOADING_STATUS.LOADED);
    expect(state.info).toEqual(profile);
    expect(state.authenticated).toEqual(true);
    expect(state.admin).toEqual(false);
  });

  it('LOGOUT apaga os dados armazenados sobre o usuário autenticado', () => {
    const authenticated = reducer(INITIAL_STATE, actions.authenticateSuccess(profile));
    const state = reducer(authenticated, actions.clearAuthentication())

    expect(state.authenticated).toEqual(false);
    expect(state.admin).toEqual(null);
    expect(state.info).toEqual({});
  });

  it('Retorna o estado recebido caso a ação não seja mapeada', () => {
    const state = reducer(INITIAL_STATE, { type: 'ação não mapeada' });

    expect(state).toEqual(INITIAL_STATE);
  });
});
