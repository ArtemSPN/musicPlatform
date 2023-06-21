import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITrack } from '../../../types/track';
import { ThunkConfig } from '../../store';
import axios from 'axios'

export const fetchTracks = createAsyncThunk<
    ITrack[],
    void,
    ThunkConfig<string>
    >(
        'tracks/fetchTracks',
        async (id,thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await axios.get<ITrack[]>(`http://localhost:5000/tracks`);
                console.log(response);
                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );