import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { distanceBetween } from 'geofire-common';
import { ICoord } from '~types/models';

enum TrackingStatus {
  NOT_STARTED,
  IN_PROGRESS,
  STOPPED,
  SAVING,
}

interface TrackingState {
  startedAt: Date;
  trackingCoordinates: ICoord[];
  trackingStatus: TrackingStatus;
  lastTrackedLocation: ICoord;
  totalDistance: number;
}

const initialState: TrackingState = {
  startedAt: null,
  trackingStatus: TrackingStatus.NOT_STARTED,
  trackingCoordinates: [],
  lastTrackedLocation: null,
  totalDistance: 0,
};

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    startTracking(state) {
      state.trackingStatus = TrackingStatus.IN_PROGRESS;
      state.startedAt = new Date();
    },
    setLastTrackedLocation: (state, action: PayloadAction<ICoord>) => {
      if (state.lastTrackedLocation) {
        const distance = distanceBetween(
          [action.payload.latitude, action.payload.longitude],
          [
            state.lastTrackedLocation.latitude,
            state.lastTrackedLocation.longitude,
          ],
        );

        state.totalDistance += distance;
      }
      state.lastTrackedLocation = action.payload;
    },
    pushLocation: (state, action: PayloadAction<ICoord[]>) => {
      state.trackingCoordinates.push(...action.payload);
    },
    clearTracking(state) {
      state.startedAt = null;
      state.trackingStatus = TrackingStatus.NOT_STARTED;
      state.trackingCoordinates = [];
      state.lastTrackedLocation = null;
      state.totalDistance = 0;
    },
  },
});

export const trackingActions = trackingSlice.actions;

export const trackingReducer = trackingSlice.reducer;
