import type { ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { useSongsPage } from './hooks';

import { Table } from '@Packages/ui/react-reactstrap-ts-ui';

import { songTableHeaders } from '../../mocks';

import { songsTablePresenter } from '@Song/adapters/presenters';

import { Button } from 'reactstrap';

export const SongsPage = (): ReactElement => {
    const { songs, onRowClick } = useSongsPage();
    return (
        <main>
            <Table 
                headers={songTableHeaders}
                data={songsTablePresenter(songs)}
                onRowClick={onRowClick}
            />
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
