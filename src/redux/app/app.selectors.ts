import { RootState } from '~redux/store';

export const getTheme = (state: RootState) => state.app.theme;
export const isIntroductionFinished = (state: RootState) =>
  state.app.introductionFinished;
