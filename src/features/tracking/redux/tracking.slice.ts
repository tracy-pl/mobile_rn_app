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
  lastTrackedLocation: ICoord;
}

const initialState: TrackingState = {
  trackingStatus: TrackingStatus.NOT_STARTED,
  trackingCoordinates: [],
  lastTrackedLocation: null,
};

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    setlastTrackedLocation: (state, action: PayloadAction<ICoord>) => {
      state.lastTrackedLocation = action.payload;
    },
    pushLocation: (state, action: PayloadAction<ICoord>) => {
      state.trackingCoordinates.push(action.payload);
      // NOTE: can be removed
      state.lastTrackedLocation = action.payload;
    },
    clearTracking(state) {
      state.trackingCoordinates = [];
    },
  },
});

export const trackingActions = trackingSlice.actions;

export const trackingReducer = trackingSlice.reducer;
