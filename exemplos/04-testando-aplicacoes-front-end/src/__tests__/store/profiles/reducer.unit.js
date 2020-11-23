import reducer, { INITIAL_STATE } from '../../../store/profiles/reducer';
import * as actions from '../../../store/profiles/actions';

import { profile, profileList } from '../../../mocks/profile';

describe('Reducer de Perfis', () => {
  it('LOAD_PROFILES_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, actions.loadProfilesSuccess(profileList));

    expect(state.profiles).toEqual(profileList);
  });

  it('DELETE_PROFILE_SUCCESS', () => {
    const profilesState = reducer(INITIAL_STATE, actions.loadProfilesSuccess(profileList));
    const state = reducer(profilesState, actions.deleteProfileSuccess(profile.uid))

    expect(state.profiles).toEqual([]);
  });

  it('EDITING_USER_PROFILE', () => {
    const profilesState = reducer(INITIAL_STATE, actions.loadProfilesSuccess(profileList));
    const state = reducer(profilesState, actions.editUserProfile(profile.uid))

    expect(state.editing.uid).toEqual(profile.uid);
    expect(state.editing.information).toEqual(profile);
  });

  it('EDITING_USER_PROFILE_CANCEL', () => {
    const profilesState = reducer(INITIAL_STATE, actions.loadProfilesSuccess(profileList));
    const editingProfileState = reducer(profilesState, actions.editUserProfile(profile.uid));
    const state = reducer(editingProfileState, actions.editUserProfileCancel())

    expect(state.editing).toEqual({});
  });

  it('UPDATE_USER_PROFILE_SUCCESS', () => {
    const { uid, ...information } = profile;
    const userName = 'new username';
    const profilesState = reducer(INITIAL_STATE, actions.loadProfilesSuccess(profileList));
    const state = reducer(profilesState, actions.updateUserProfileSuccess({
      uid,
      information: {
        ...information,
        userName
      }
    }));

    const [updated] = state.profiles;

    expect(state.editing).toEqual({});
    expect(updated.userName).toEqual(userName);
  });

  it('CREATING_USER_PROFILE', () => {
    const state = reducer(INITIAL_STATE, actions.creatingUserProfile());

    expect(state.creating).toEqual(true);
  });

  it('CREATING_USER_PROFILE_CANCEL', () => {
    const creatingState = reducer(INITIAL_STATE, actions.creatingUserProfile());
    const state = reducer(creatingState, actions.creatingUserProfileCancel());

    expect(state.creating).toEqual(false);
  });

  it('CREATE_USER_PROFILE_SUCCESS', () => {
    const creatingState = reducer(INITIAL_STATE, actions.creatingUserProfile());
    const profileCount = creatingState.profiles.length;

    const state = reducer(creatingState, actions.createUserProfileSuccess(profile));

    expect(state.creating).toEqual(false);
    expect(state.profiles.length).toEqual(profileCount + 1);
  });

  it('Retorna o estado recebido caso a ação não seja mapeada', () => {
    const state = reducer(INITIAL_STATE, { type: 'ação não mapeada' });

    expect(state).toEqual(INITIAL_STATE);
  });
});
