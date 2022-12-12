import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '~types/models';

interface UserState {
  user: IUser;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
