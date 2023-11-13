import { Root } from 'pages/RootPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main'
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePaths[AppRoutes.MAIN],
        element: <Root />
    }
}
