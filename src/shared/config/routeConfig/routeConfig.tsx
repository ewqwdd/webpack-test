import { NotFound } from 'pages/NotFoundPage'
import { Root } from 'pages/RootPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not-found'
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePaths[AppRoutes.MAIN],
        element: <Root />
    },
    [AppRoutes.NOT_FOUND]: {
        path: routePaths[AppRoutes.NOT_FOUND],
        element: <NotFound />
    }
}
