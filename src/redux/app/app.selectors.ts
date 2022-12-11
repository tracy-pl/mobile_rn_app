import { RootState } from '~redux/store';

const getTheme = (state: RootState) => state.app.theme;

export { getTheme };
