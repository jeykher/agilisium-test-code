import { useState, useEffect } from 'react';

import { useLocation } from "react-router-dom";

import { getSongsService } from "@Song/infrastructure/services";
import { getArtistsService } from "@Artist/infrastructure/services";

export const useArtistsByIdPage = () => {
    const [artists, setArtists] = useState([]);
    const query: URLSearchParams = new URLSearchParams(useLocation().search);
    const getQueryParams = (): string | null => query.get('ids');
    const processQueryParams = (): Array<number> => {
        const queryString = getQueryParams();
        if(!queryString) {
            return [];
        }
        const queryStringFragment = queryString.split(',');
        return queryStringFragment.map((fragment: string) => {
            return +fragment;
        })
    };
    const getArtists = () => {
        let artistIds: any = [];
        let filteredArtists: any = [];
        const queryFragments = processQueryParams();
        const songs = getSongsService();
        songs.map(song => {
            queryFragments.map(fragment => {
                if(fragment === song.id) {
                    artistIds.push(song.mainArtistId);
                }
            });
        });
        const artists = getArtistsService();
        artists.filter(artist => {
            artistIds.map((artistId: any) => {
                if(artistId === artist.id) {
                    filteredArtists.push(artist);
                }
            });
        });
        setArtists(filteredArtists);
    };
    useEffect(() => {
        getArtists();
    }, []);
    return {
        artists
    };
};