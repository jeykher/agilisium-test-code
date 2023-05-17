import type { ReactElement } from 'react';
import type { Artist } from '@/Artist/domain/entities';

import { Link } from 'react-router-dom';

import { Table } from 'reactstrap';

import { useArtistsByIdPage } from './hooks';

import { Button } from 'reactstrap';

export const ArtistsByIdPage = (): ReactElement => {
    const { artists } = useArtistsByIdPage();
    console.log(artists);
    return (
        <main>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                {
                    (artists && artists.length !== 0) && (
                        <tbody>
                            {
                                artists.map((artist: Artist) => (
                                    <tr
                                        key={artist.id}
                                    >
                                        <th scope="row">{artist.id}</th>
                                        <td>{artist.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    )
                }
            </Table>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 2rem' }}>
                <Link
                    to='/'
                >
                    <Button color='danger'>Volver</Button>
                </Link>
            </div>
        </main>
    );
};
