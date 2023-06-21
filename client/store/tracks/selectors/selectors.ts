import { StoreSchema } from "../../store";

export const getTracksData = (state: StoreSchema) => state.tracks.tracks;

export const getTracksError = (state: StoreSchema) => state.tracks.error;

export const getTracksIsLoading = (state: StoreSchema) => state.tracks.isLoading;
