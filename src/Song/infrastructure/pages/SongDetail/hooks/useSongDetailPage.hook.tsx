import type { Song } from '@/Song/domain/entities';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { getSongByIdService } from "@Song/infrastructure/services/getSongById.service";

interface HookValues {
    song: Song | undefined;
}

export const useSongDetailPage = (): HookValues => {
    const [song, setSong] = useState<Song | undefined>(undefined);
    const { id } = useParams();
    const getSongById = () => {
        if(id) {
            const song = getSongByIdService(+id);
            setSong(song);
        }
    };
    useEffect(() => {
        getSongById();
    }, []);
    return {
        song
    };
};
