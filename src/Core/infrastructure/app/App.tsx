import type { ReactElement } from 'react';

import { Providers } from '../providers';

import { Router } from '@Packages/ui/react-router-dom-ts-ui';

import { routes } from '../routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals/globals.scss';

export const App = (): ReactElement => (
    <Providers>
        <Router 
            routes={routes}
        />
    </Providers>
);
