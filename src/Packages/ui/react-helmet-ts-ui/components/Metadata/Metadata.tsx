import type { ReactElement, ReactNode } from 'react';

import { Helmet } from 'react-helmet-async';

interface Props {
    children?: ReactNode;
}

export const Metadata = ({ children }: Props): ReactElement => (
    <Helmet>{children}</Helmet>
);
