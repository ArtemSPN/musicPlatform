import { StoreSchema } from "../../store";

export const getPlayerActive = (state: StoreSchema) => state.player.active;

export const getPlayerCurrentTime = (state: StoreSchema) => state.player.currentTime;

export const getPlayerDuration = (state: StoreSchema) => state.player.duration;

export const getPlayerPause = (state: StoreSchema) => state.player.pause;

export const getPlayerVolume = (state: StoreSchema) => state.player.volume;

