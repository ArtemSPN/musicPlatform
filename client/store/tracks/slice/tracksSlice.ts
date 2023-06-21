import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { PlayerState } from '../../../types/player';
import { ITrack, TraksState } from '../../../types/track';
import { fetchTracks } from '../service/fetchTracks';

const initialState: TraksState = {
  tracks: [],
  error: false,
  isLoading: true
};

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
      setTrackList(state, action) {
        state.tracks = action.payload;
        state.isLoading = false;
      }
    },
  },
);

export const {setTrackList} = tracksSlice.actions;

export const { reducer: tracksReducer } = tracksSlice;
export const { actions: tracksAction } = tracksSlice;
