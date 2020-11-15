import { useSelector } from 'react-redux';

export const useNotification = () => useSelector(state => state.notifications);
