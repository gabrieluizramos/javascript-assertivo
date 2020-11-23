import * as actions from '../../../store/profiles/actions';

import { profile, profileList } from '../../../mocks/profile';

import * as client from '../../../clients/http/profiles';
jest.mock('../../../clients/http/profiles');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Creators', () => {
  it.each([
    ['loadProfilesPending', actions.LOAD_PROFILES_PENDING, undefined],
    ['loadProfilesSuccess', actions.LOAD_PROFILES_SUCCESS, profile],
    ['loadProfilesError', actions.LOAD_PROFILES_ERROR, undefined],
    ['deleteProfilePending', actions.DELETE_PROFILE_PENDING, undefined],
    ['deleteProfileSuccess', actions.DELETE_PROFILE_SUCCESS, profile.uid],
    ['deleteProfileError', actions.DELETE_PROFILE_ERROR, undefined],
    ['editUserProfile', actions.EDITING_USER_PROFILE, profile.uid],
    ['editUserProfileCancel', actions.EDITING_USER_PROFILE_CANCEL, undefined],
    ['updateUserProfilePending', actions.UPDATE_USER_PROFILE_PENDING, undefined],
    ['updateUserProfileSuccess', actions.UPDATE_USER_PROFILE_SUCCESS, profile],
    ['updateUserProfileError', actions.UPDATE_USER_PROFILE_ERROR, undefined],
    ['creatingUserProfile', actions.CREATING_USER_PROFILE, profile.uid],
    ['creatingUserProfileCancel', actions.CREATING_USER_PROFILE_CANCEL, undefined],
    ['createUserProfilePending', actions.CREATE_USER_PROFILE_PENDING, undefined],
    ['createUserProfileSuccess', actions.CREATE_USER_PROFILE_SUCCESS, profile],
    ['createUserProfileError', actions.CREATE_USER_PROFILE_ERROR, undefined],
  ])('%s deve criar uma ação com o tipo %s', (creator, type, payload) => {
    const action = actions[creator](payload);

    expect(action.type).toEqual(type);
    expect(action.payload).toEqual(payload);
  });
});

describe('loadProfiles thunk', () => {
  it('Carrega os perfis com sucesso', async () => {
    client.getProfiles.mockResolvedValueOnce(profileList);
    const dispatch = jest.fn();

    await actions.loadProfiles()(dispatch);

    expect(client.getProfiles).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls).toEqual([
      [actions.loadProfilesPending()],
      [actions.loadProfilesSuccess(profileList)]
    ]);
  });
  it('Dispara um erro caso não consiga carregar os perfis', async () => {
    const error = 'Ocorreu um erro';
    client.getProfiles.mockRejectedValueOnce(error);
    const dispatch = jest.fn();

    await actions.loadProfiles()(dispatch);

    expect(client.getProfiles).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls).toEqual([
      [actions.loadProfilesPending()],
      [actions.loadProfilesError(error)]
    ]);
  });
});

describe('deleteProfile thunk', () => {
  it('Remove usuário com sucesso', async () => {
    client.deleteProfile.mockResolvedValueOnce();
    const dispatch = jest.fn();

    await actions.deleteProfile(profile.uid)(dispatch);

    expect(client.deleteProfile).toHaveBeenCalledTimes(1);
    expect(client.deleteProfile).toHaveBeenCalledWith({ uid: profile.uid });
    expect(dispatch.mock.calls).toEqual([
      [actions.deleteProfilePending()],
      [actions.deleteProfileSuccess(profile.uid)]
    ]);
  });
  it('Dispara um erro caso não consiga remover usuário', async () => {
    const error = 'Ocorreu um erro';
    client.deleteProfile.mockRejectedValueOnce(error);
    const dispatch = jest.fn();

    await actions.deleteProfile(profile.uid)(dispatch);

    expect(client.deleteProfile).toHaveBeenCalledTimes(1);
    expect(client.deleteProfile).toHaveBeenCalledWith({ uid: profile.uid });
    expect(dispatch.mock.calls).toEqual([
      [actions.deleteProfilePending()],
      [actions.deleteProfileError(profile.uid)]
    ]);
  });
});

describe('updateUserProfile thunk', () => {
  it('Atualiza usuário com sucesso', async () => {
    const { uid, ...information } = profile;
    client.updateProfile.mockResolvedValueOnce();
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      profiles: {
        editing: { uid }
      }
    }))

    await actions.updateUserProfile(information)(dispatch, getState);

    expect(client.updateProfile).toHaveBeenCalledTimes(1);
    expect(client.updateProfile).toHaveBeenCalledWith({ uid, ...information });
    expect(dispatch.mock.calls).toEqual([
      [actions.updateUserProfilePending()],
      [actions.updateUserProfileSuccess({ uid, information })]
    ]);
  });
  it('Dispara um erro caso não consiga atualizar usuário', async () => {
    const error = 'Ocorreu um erro';
    const { uid, ...information } = profile;
    client.updateProfile.mockRejectedValueOnce(error);
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      profiles: {
        editing: { uid }
      }
    }))

    await actions.updateUserProfile(information)(dispatch, getState);

    expect(client.updateProfile).toHaveBeenCalledTimes(1);
    expect(client.updateProfile).toHaveBeenCalledWith({ uid, ...information });
    expect(dispatch.mock.calls).toEqual([
      [actions.updateUserProfilePending()],
      [actions.updateUserProfileError(error)]
    ]);
  });
});

describe('createUserProfile thunk', () => {
  it('Cria usuário com sucesso', async () => {
    client.createProfile.mockResolvedValueOnce(profile);
    const dispatch = jest.fn();

    await actions.createUserProfile(profile)(dispatch);

    expect(client.createProfile).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls).toEqual([
      [actions.createUserProfilePending()],
      [actions.createUserProfileSuccess(profile)],
    ]);
  });
  it('Dispara um erro caso não consiga criar usuário', async () => {
    const error = 'Ocorreu um erro';
    client.createProfile.mockRejectedValueOnce(error);
    const dispatch = jest.fn();

    await actions.createUserProfile(profile)(dispatch);

    expect(client.createProfile).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls).toEqual([
      [actions.createUserProfilePending()],
      [actions.createUserProfileError()],
    ]);
  });
});
