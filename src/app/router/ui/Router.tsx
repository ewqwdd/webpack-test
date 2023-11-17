import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoading } from 'widgets/PageLoading'

export default function Router() {
    return (
        <Suspense>
            <Routes>
                {Object.values(routeConfig).map((elem) => (
                    <Route key={elem.path} path={elem.path} element={
                        <Suspense fallback={<PageLoading />}>
                            {elem.element}
                        </Suspense>
                    } />
                ))}
            </Routes>
        </Suspense>
    )
}
