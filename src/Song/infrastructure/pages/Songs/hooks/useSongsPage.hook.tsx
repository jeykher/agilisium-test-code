import type { RootState } from '@Core/infrastructure/redux/store';
import type { Song } from '@Song/domain/entities';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { getSongsService } from '@Song/infrastructure/services';

import { useDispatch, useSelector } from 'react-redux';

import { setSongs } from '@Song/infrastructure/redux/reducers/song.reducer';

interface HookValues {
    songs: Array<Song>;
    onRowClick: (row: any) => void;
}

export const useSongsPage = (): HookValues => {
    const { songs } = useSelector((state: RootState) => state.songState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getSongs = (): void => {
        const songs: Array<Song> = getSongsService();
        dispatch(setSongs(songs));
    };
    const onRowClick = (row: any): void => {
        navigate(`/songs/${row.id}`);
    }
    useEffect(() => {
        getSongs();
    }, []);
    return {
        songs,
        onRowClick
    };
};
