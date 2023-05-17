import type { Song } from '../entities';

export interface SongForTable extends Pick<Song, 'id' | 'title'> {
    mainArtist: string;
}
