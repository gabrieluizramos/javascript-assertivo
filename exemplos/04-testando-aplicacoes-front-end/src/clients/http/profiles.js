import baseClient from './config';

export const getProfiles = async ({client = baseClient } = {}) => client.get('/users');

export const deleteProfile = async ({ client = baseClient, uid }) => client.delete('/user', { data: { uid } });

export const updateProfile = async ({
  client = baseClient,
  uid,
  ...information
}) => client.patch('/user', { uid, ...information });
