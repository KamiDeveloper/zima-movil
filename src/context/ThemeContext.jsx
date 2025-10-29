import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(undefined)

export const THEMES = {
    ZIMA_LIGHT: 'zima-light',
    LIGHT: 'light',
    DARK: 'dark',
    LIGHT_ALTERNATIVE_2: 'light-alternative-2'
}

export const THEME_LABELS = {
    [THEMES.ZIMA_LIGHT]: 'Zima Light',
    [THEMES.LIGHT]: 'Modern Light',
    [THEMES.DARK]: 'Kami Dark',
    [THEMES.LIGHT_ALTERNATIVE_2]: 'Mint'
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('zima-theme')
        return savedTheme && Object.values(THEMES).includes(savedTheme)
            ? savedTheme
            : THEMES.LIGHT
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('zima-theme', theme)
    }, [theme])

    const changeTheme = (newTheme) => {
        if (Object.values(THEMES).includes(newTheme)) {
            setTheme(newTheme)
        }
    }

    const value = {
        theme,
        changeTheme,
        themes: THEMES,
        themeLabels: THEME_LABELS
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
