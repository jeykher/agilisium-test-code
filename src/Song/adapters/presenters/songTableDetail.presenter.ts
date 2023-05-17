import type { Song } from '@Song/domain/entities';
import type { Artist } from '@Artist/domain/entities/Artist.entity';

import { artists } from '@Artist/infrastructure/mocks';

export const songTableDetailPresenter = (song: Song) => {
    const artist = artists?.find(
        (artist: Artist) => artist.id === song.mainArtistId
    );
    return artist?.name;
};
