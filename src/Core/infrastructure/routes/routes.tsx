import type { Route } from "@Packages/ui/react-router-dom-ts-ui";

import { MainLayout } from "../layouts/MainLayout/MainLayout";

import { HomePage } from "../pages";
import { SongDetailPage, SongsPage } from "@Song/infrastructure/pages";
import { ArtistsByIdPage } from "@Artist/infrastructure/pages";

export const routes: Array<Route> = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/home',
        element: <HomePage />
    },
    {
        path: '/songs',
        element: <MainLayout><SongsPage /></MainLayout>
    },
    {
        path: '/songs/:id',
        element: <MainLayout><SongDetailPage /></MainLayout>
    },
    {
        path: '/artists/byIds',
        element: <MainLayout><ArtistsByIdPage /></MainLayout>
    }
];
