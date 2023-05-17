import type { PayloadAction } from '@reduxjs/toolkit';
import type { Song } from '@Song/domain/entities';
import type { SongState } from '@Song/domain/interfaces';

import { createSlice } from '@reduxjs/toolkit';

import { songState as initialState } from '../states';

export const songReducer = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setSongs: (state: SongState, action: PayloadAction<Array<Song>>) => {
            state.songs = action.payload;
        }
    }
});

export const { setSongs } = songReducer.actions;

export default songReducer.reducer;
