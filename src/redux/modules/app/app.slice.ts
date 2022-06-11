import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME, ThemeEnum } from '~theme';

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
    setTheme: (state, { payload }: PayloadAction<ThemeEnum>) => {
      state.theme = payload;
    },
    toggleTheme: state => {
      state.theme = state.theme !== THEME.DARK ? THEME.DARK : THEME.LIGHT;
    },
    finishIntroduction: state => {
      state.checkedIn = true;
    },
  },
});

export const { setTheme, toggleTheme, finishIntroduction } = appSlice.actions;

export default appSlice.reducer;
