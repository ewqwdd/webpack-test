import { ThemeContext } from './ThemeContext'
import {
    Theme,
    localStorageThemeKey
} from 'shared/config/theme/ThemeContext'
import { useContext } from 'react'

interface useThemeReturn {
    toggleTheme: () => void
    theme: Theme
}

export default function useTheme(): useThemeReturn {
    const { setTheme, theme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.dark ? Theme.light : Theme.dark
        setTheme(newTheme)
        localStorage.setItem(localStorageThemeKey, newTheme)
    }
    return {
        toggleTheme,
        theme
    }
}
