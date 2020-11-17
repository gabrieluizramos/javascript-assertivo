import baseClient from './config';

import endpoints from './endpoints';

export const getProfiles = ({
  client = baseClient
} = {}) => client.get(endpoints.users);

export const deleteProfile = ({
  client = baseClient,
  uid
}) => client.delete(endpoints.user, { data: { uid } });

export const updateProfile = ({
  client = baseClient,
  uid,
  ...information
}) => client.patch(endpoints.user, { uid, ...information });

export const createProfile = ({
  client = baseClient,
  information
}) => client.post(endpoints.user, information);
