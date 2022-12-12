import { RootState } from '../store';

const isLoggedIn = (state: RootState) => state.user.user !== null;

export { isLoggedIn };
