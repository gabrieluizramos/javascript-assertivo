import { useSelector } from 'react-redux';

export const useAuthentication = () => useSelector(state => state.user);
