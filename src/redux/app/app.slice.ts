import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME, ThemeEnum } from '~theme';

interface AppState {
  theme: ThemeEnum;
  introductionFinished: boolean; // Finished introduction screens
}

const initialState: AppState = {
  theme: THEME.DEFAULT,
  introductionFinished: false,
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
      state.introductionFinished = true;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
