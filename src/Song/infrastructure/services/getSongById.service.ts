import type { Song } from '../../domain/entities';

import { songs } from '../mocks';

export const getSongByIdService = (id: number): Song => {
    const response = songs?.find((song: Song) => song.id === id);
    if (!response) {
        throw new Error(`Song with id ${id} have not been founded`);
    }
    return response;
};
