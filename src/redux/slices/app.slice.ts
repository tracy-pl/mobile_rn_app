import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    setTheme: (state, action: PayloadAction<ThemeEnum>) => {
      state.theme = action.payload;
    },
    finishIntroduction: state => {
      state.checkedIn = true;
    },
  },
});

export const { setTheme, finishIntroduction } = appSlice.actions;

export default appSlice.reducer;
