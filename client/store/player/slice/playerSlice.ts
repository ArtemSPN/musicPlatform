import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { PlayerState } from '../../../types/player';
import { ITrack } from '../../../types/track';

const initialState: PlayerState = {
  volume: 50,
  active: null,
  duration: 103,
  currentTime: 0,
  pause: true
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playTrack(state){
      state.pause = false;
    },
    pauseTrack(state){
      state.pause = true;
    },
    setActive(state, action){
      state.active = action.payload;
      state.currentTime = 0;
      state.pause = false;
    },
    setDuration(state, action){
      state.duration = action.payload;
    },
    setCurrentTime(state, action){
      state.currentTime = action.payload;
    },
    setVolume(state, action){
      state.volume = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.comments,
        };
      },
    },
  },
});


export const { pauseTrack, playTrack, setActive, setCurrentTime, setDuration, setVolume } = playerSlice.actions;

export const { reducer: playerReducer } = playerSlice;
export const { actions: playerAction } = playerSlice;
