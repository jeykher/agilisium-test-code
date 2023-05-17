import type { ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

import styles from './styles/HomePage.module.scss';

export const HomePage = (): ReactElement => (
    <main className={styles.page}>
        <Link 
            to='/songs'
        >
            <Button color="primary" size="lg">
                Songs
            </Button>
        </Link>
        <Link
            to='/artists/byIds?ids=123,124'
        >
            <Button color="success" size="lg" style={{ marginLeft: '1rem' }}>
                Artists
            </Button>
        </Link>
    </main>
);
