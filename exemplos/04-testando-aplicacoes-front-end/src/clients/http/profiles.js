import baseClient from './config';

export const getProfiles = ({
  client = baseClient
} = {}) => client.get('/users');

export const deleteProfile = ({
  client = baseClient,
  uid
}) => client.delete('/user', { data: { uid } });

export const updateProfile = ({
  client = baseClient,
  uid,
  ...information
}) => client.patch('/user', { uid, ...information });

export const createProfile = ({
  client = baseClient,
  information
}) => client.post('/user', information);
