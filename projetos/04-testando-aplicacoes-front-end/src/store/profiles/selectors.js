import { useSelector } from 'react-redux';

export const useProfiles = () => useSelector(state => state.profiles);
