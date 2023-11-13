import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export default function Router() {
    return (
        <Suspense fallback={'loading...'}>
            <Routes>
                {Object.values(routeConfig).map((elem) => (
                    <Route path={elem.path} element={elem.element} />
                ))}
            </Routes>
        </Suspense>
    )
}
