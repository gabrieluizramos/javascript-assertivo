// Reducer e estado inicial
import reducer, { INITIAL_STATE } from '../../../store/notification/reducer';

// Actions
import * as actions from '../../../store/notification/actions';

// Actions de usuários
import * as userActions from '../../../store/user/actions';

// Actions de perfis
import * as profileActions from '../../../store/profiles/actions';

describe('Reducer de Notificação', () => {
  it.each([
    [userActions.AUTHENTICATE_ERROR, 'AUTHENTICATE'],
    [profileActions.DELETE_PROFILE_ERROR, 'DELETE'],
    [profileActions.LOAD_PROFILES_ERROR, 'DEFAULT'],
    [profileActions.UPDATE_USER_PROFILE_ERROR, 'UPDATE'],
    [profileActions.CREATE_USER_PROFILE_ERROR, 'CREATE'],
  ])('%s deve disparar uma mensagem de erro', (type, messageType) => {
    const message = 'error';
    let state = reducer(INITIAL_STATE, { type, payload: message });

    expect(state.active).toEqual(true);
    expect(state.type).toEqual(actions.NOTIFICATION_TYPES.ERROR);
    expect(state.message).toEqual(message);

    state = reducer(INITIAL_STATE, { type });

    expect(state.active).toEqual(true);
    expect(state.type).toEqual(actions.NOTIFICATION_TYPES.ERROR);
    expect(state.message).toEqual(actions.MESSAGES[messageType].ERROR);
  });

  it.each([
    [profileActions.CREATE_USER_PROFILE_SUCCESS, 'CREATE'],
    [profileActions.DELETE_PROFILE_SUCCESS, 'DELETE'],
    [profileActions.UPDATE_USER_PROFILE_SUCCESS, 'UPDATE'],
  ])('%s deve disparar uma mensagem de sucesso', (type, messageType) => {
    let state = reducer(INITIAL_STATE, { type });

    expect(state.active).toEqual(true);
    expect(state.type).toEqual(actions.NOTIFICATION_TYPES.SUCCESS);
    expect(state.message).toEqual(actions.MESSAGES[messageType].SUCCESS);
  });

  it('Retorna o estado recebido caso a ação não seja mapeada', () => {
    const state = reducer(INITIAL_STATE, { type: 'ação não mapeada' });

    expect(state).toEqual(INITIAL_STATE);
  });
});
