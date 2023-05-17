import type { ReactElement, ReactNode } from 'react';

import { store } from '../../redux/store';

import { Provider as ReduxProvider } from 'react-redux';
import { HelmetProvider } from '@Packages/ui/react-helmet-ts-ui';

interface Props {
    children: ReactNode;
}

export const Providers = ({ children }: Props): ReactElement => (
    <ReduxProvider
        store={store}
    >
        <HelmetProvider>
            { children }
        </HelmetProvider>
    </ReduxProvider>
);
