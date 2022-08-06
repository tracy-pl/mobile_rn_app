import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICoord } from '~types/models';

interface UserState {
  currentTracking: ICoord[];
}

const initialState: UserState = {
  currentTracking: [],
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    pushLocation: (state, action: PayloadAction<ICoord>) => {
      state.currentTracking.push(action.payload);
    },
    stopTracking(state) {
      state.currentTracking = [];
    },
  },
});

export const { pushLocation, stopTracking } = locationSlice.actions;

export default locationSlice.reducer;
