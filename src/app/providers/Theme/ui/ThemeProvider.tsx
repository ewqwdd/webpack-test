import { type FC, type ReactNode, useMemo, useState } from 'react'
import { Theme, ThemeContext, localStorageThemeKey } from '../../../../shared/config/theme/ThemeContext'

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem(localStorageThemeKey) as Theme || Theme.light)

    const defaultProps = useMemo(() => ({
        theme, setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
