import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICoord } from '~types/models';

enum TrackingStatus {
  NOT_STARTED,
  IN_PROGRESS,
  STOPPED,
  SAVING,
}

interface TrackingState {
  trackingCoordinates: ICoord[];
  trackingStatus: TrackingStatus;
  currentLocation: ICoord;
}

const initialState: TrackingState = {
  trackingStatus: TrackingStatus.NOT_STARTED,
  trackingCoordinates: [],
  currentLocation: null,
};

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<ICoord>) => {
      state.currentLocation = action.payload;
    },
    pushLocation: (state, action: PayloadAction<ICoord>) => {
      state.trackingCoordinates.push(action.payload);
      // NOTE: can be removed
      state.currentLocation = action.payload;
    },
    clearTracking(state) {
      state.trackingCoordinates = [];
    },
  },
});

export const trackingActions = trackingSlice.actions;

export const trackingReducer = trackingSlice.reducer;
