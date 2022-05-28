import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '~types/models';

interface UserState {
  loggedIn: boolean;
  user: IUser;
}

const initialState: UserState = {
  loggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<IUser>) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
  },
});

export const { authenticate } = userSlice.actions;

export default userSlice.reducer;
