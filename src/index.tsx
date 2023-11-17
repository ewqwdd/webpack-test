import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/Theme'
import App from 'app/App'

import 'shared/config/i18/i18'
import { ErrorBoundary } from 'app/ErrorBoundary'

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
