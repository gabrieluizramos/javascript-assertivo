import * as client from '../../clients/http/profiles';

// Actions ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Type
export const LOAD_PROFILES_PENDING = 'LOAD_PROFILES_PENDING';
export const LOAD_PROFILES_SUCCESS = 'LOAD_PROFILES_SUCCESS';
export const LOAD_PROFILES_ERROR = 'LOAD_PROFILES_ERROR';

export const DELETE_PROFILE_PENDING = 'DELETE_PROFILE_PENDING';
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS';
export const DELETE_PROFILE_ERROR = 'DELETE_PROFILE_ERROR';

export const EDITING_USER_PROFILE = 'EDITING_USER_PROFILE';
export const EDITING_USER_PROFILE_CANCEL = 'EDITING_USER_PROFILE_CANCEL';
export const UPDATE_USER_PROFILE_PENDING = 'UPDATE_USER_PROFILE_PENDING';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_ERROR = 'UPDATE_USER_PROFILE_ERROR';

// Creators
export const loadProfilesPending = () => ({
  type: LOAD_PROFILES_PENDING
});
export const loadProfilesSuccess = (profile) => ({
  type: LOAD_PROFILES_SUCCESS,
  payload: profile
});
export const loadProfilesError = () => ({
  type: LOAD_PROFILES_ERROR
});

export const deleteProfilePending = () => ({
  type: DELETE_PROFILE_PENDING
});
export const deleteProfileSuccess = (uid) => ({
  type: DELETE_PROFILE_SUCCESS,
  payload: uid
});
export const deleteProfileError = () => ({
  type: DELETE_PROFILE_ERROR
});

export const editUserProfile = uid => ({
  type: EDITING_USER_PROFILE,
  payload: uid
});
export const editUserProfileCancel = () => ({
  type: EDITING_USER_PROFILE_CANCEL,
});
export const updateUserProfilePending = () => ({
  type: UPDATE_USER_PROFILE_PENDING
});
export const updateUserProfileSuccess = (payload) => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
  payload,
});
export const updateUserProfileError = () => ({
  type: UPDATE_USER_PROFILE_ERROR
});

// Fetching constants
export const LOADING_STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

// Thunks :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const loadProfiles = () => async (dispatch) => {
  dispatch(loadProfilesPending());

  try {
    const profiles = await client.getProfiles();
    dispatch(loadProfilesSuccess(profiles));
  } catch (error) {
    dispatch(loadProfilesError(error));
  }
};

export const deleteProfile = (uid) => async (dispatch) => {
  dispatch(deleteProfilePending());

  try {
    await client.deleteProfile({ uid });
    dispatch(deleteProfileSuccess(uid));
  } catch (error) {
    dispatch(deleteProfileError(error));
  }
};

export const updateUserProfile = (information) => async (dispatch, getState) => {
  dispatch(updateUserProfilePending());
  const { uid } = getState().profiles.editing;

  try {
    await client.updateProfile({ uid, ...information })
    dispatch(updateUserProfileSuccess({ uid, information }));
  } catch (err) {
    dispatch(updateUserProfileError(err));
  }
};
