import './styles/index.scss'
import useTheme from 'shared/config/theme/useTheme'
import { classNames } from 'shared/lib/classname'
import { Router } from './router'
import { NavBar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { type ReactNode, Suspense } from 'react'

export default function App(): ReactNode {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <div>
                        <Router />
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

// <MainAsync />
