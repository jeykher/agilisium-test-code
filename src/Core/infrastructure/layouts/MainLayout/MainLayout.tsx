import type { ReactElement, ReactNode } from "react";

import styles from './styles/MainLayout.module.scss';

interface Props {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props): ReactElement => (
    <div className={styles.layout}>
        { children }
    </div>
);