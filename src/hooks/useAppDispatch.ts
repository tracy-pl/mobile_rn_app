import { useDispatch } from 'react-redux';
import { AppStore } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppStore['dispatch']>();
