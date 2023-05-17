import type { ReactElement } from 'react';
import type { Route as RouteType } from '../../types/Route.type';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface Props {
    routes: Array<RouteType>
}

export const Router = ({
    routes = []
}: Props): ReactElement => (
    <BrowserRouter>
        <Routes>
            {
                routes.map((route: RouteType, index: number) => (
                    <Route
                        key={index} 
                        path={route.path}
                        element={route.element}
                    />
                ))
            }
        </Routes>
    </BrowserRouter>
);
