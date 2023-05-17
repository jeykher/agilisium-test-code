import type { Song } from '../../domain/entities';

import { songs } from '../mocks';

export const getSongsService = (): Array<Song> => {
    return songs;
};
