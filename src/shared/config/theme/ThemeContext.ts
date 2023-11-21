import { createContext } from 'react'

export enum Theme {
    light = 'app_light_theme',
    dark = 'app_dark_theme'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.light })
document.body.className = Theme.light
export const localStorageThemeKey = 'theme'
