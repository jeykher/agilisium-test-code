import type { Artist } from '@Artist/domain/entities';

import { artists } from '../mocks';

export const getArtistsService = (): Array<Artist> => {
    return artists;
};
