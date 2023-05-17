import type { Song } from '@Song/domain/entities';
import type { SongForTable } from '@/Song/domain/interfaces';
import type { Artist } from '@Artist/domain/entities';

import { artists } from '@Artist/infrastructure/mocks';

const getArtistNameById = (mainArtistId: number): string => {
    const artist: Artist | undefined = artists.find(
        (artist: Artist) => artist.id === mainArtistId
    );
    if (!artist?.name) {
        return '';
    }
    return artist?.name;
};

const formatSongsForDisplayOnTable = (songs: Array<SongForTable>) => {
    const songForTableFormatted = songs?.map((song: SongForTable) => {
        return {
            id: song.id,
            items: [song.id, song.title, song.mainArtist]
        };
    });
    return songForTableFormatted;
};

export const songsTablePresenter = (songs: Array<Song>) => {
    const songsForTable: Array<SongForTable> = songs?.map((song: Song) => {
        return {
            id: song.id,
            title: song.title,
            mainArtist: getArtistNameById(song.mainArtistId)
        };
    });
    return formatSongsForDisplayOnTable(songsForTable);
};
