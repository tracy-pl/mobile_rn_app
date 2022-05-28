import { createSlice } from '@reduxjs/toolkit';
import { THEME, ThemeEnum } from '~constants/theme.contants';

interface AppState {
  theme: ThemeEnum;
  checkedIn: boolean;
}

const initialState: AppState = {
  theme: THEME.DEFAULT,
  checkedIn: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    },
    finishIntroduction: state => {
      state.checkedIn = true;
    },
  },
});

export const { toggleTheme, finishIntroduction } = appSlice.actions;

export default appSlice.reducer;
