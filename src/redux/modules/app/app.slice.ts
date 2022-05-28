import { createSlice } from '@reduxjs/toolkit';
import { THEME, ThemeEnum } from '~constants/theme';

interface AppState {
  theme: ThemeEnum;
  checkedIn: boolean; // Finished introduction screens
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
      state.theme = state.theme !== THEME.DARK ? THEME.DARK : THEME.LIGHT;
    },
    finishIntroduction: state => {
      state.checkedIn = true;
    },
  },
});

export const { toggleTheme, finishIntroduction } = appSlice.actions;

export default appSlice.reducer;
