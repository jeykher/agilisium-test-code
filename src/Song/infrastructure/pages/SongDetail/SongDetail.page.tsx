import type { ReactElement } from 'react';

import { Table } from 'reactstrap';

import { useSongDetailPage } from './hooks/useSongDetailPage.hook';

import { songTableDetailPresenter } from '@Song/adapters/presenters';

import { Button } from 'reactstrap';

import { Link } from 'react-router-dom';

export const SongDetailPage = (): ReactElement => {
    const { song } = useSongDetailPage();
    return (
        <main>
            {
                song && (
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>{song.id}</td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>{song.title}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>{song.genre}</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>{song.duration}</td>
                            </tr>
                            <tr>
                                <td>Main Artist</td>
                                <td>{songTableDetailPresenter(song)}</td>
                            </tr>
                            <tr>
                                <td>Audio Language</td>
                                <td>{song.audioLanguage}</td>
                            </tr>
                        </tbody>
                    </Table>
                )
            }
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 2rem' }}>
                <Link
                    to='/songs'
                >
                    <Button color='danger'>Volver</Button>
                </Link>
            </div>
        </main>
    );
};
