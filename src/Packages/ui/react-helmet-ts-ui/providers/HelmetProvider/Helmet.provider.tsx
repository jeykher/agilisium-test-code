import type { ReactElement, ReactNode } from 'react';

import { HelmetProvider as ReactHelmetProvider } from 'react-helmet-async';

interface Props {
    children: ReactNode;
}

export const HelmetProvider = ({ children }: Props): ReactElement => (
    <ReactHelmetProvider>{children}</ReactHelmetProvider>
);
