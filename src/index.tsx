import 'app/styles/index.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/Theme'
import App from 'app/App'

import 'shared/config/i18/i18'
import { ErrorBoundary } from 'app/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
