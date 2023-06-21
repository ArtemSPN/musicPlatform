import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { playerReducer } from './player/slice/playerSlice';
import { PlayerState } from '../types/player';
import { tracksReducer } from './tracks/slice/tracksSlice';
import { TraksState } from '../types/track';

const makeStore = () =>
  configureStore({
    reducer: {
        player: playerReducer,
        tracks: tracksReducer,
    },
    devTools: true,
  });


export interface StoreSchema {
    player: PlayerState,
    tracks: TraksState
}

export const wrapper = createWrapper(makeStore);