export interface Song {
    id: number;
    title: string;
    genre?: string;
    duration?: number;
    mainArtistId: number;
    audioLanguage?: string;
}
