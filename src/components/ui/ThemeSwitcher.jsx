import { useTheme } from '../../context/ThemeContext'

const ThemeSwitcher = () => {
    const { theme, changeTheme, themes, themeLabels } = useTheme()

    return (
        <div className="theme-switcher">
            <select
                value={theme}
                onChange={(e) => changeTheme(e.target.value)}
                className="px-3 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-200 outline-none"
                style={{
                    backgroundColor: `rgb(var(--card))`,
                    color: `rgb(var(--card-foreground))`,
                    border: `1px solid rgb(var(--border))`
                }}
            >
                {Object.entries(themes).map(([key, value]) => (
                    <option key={value} value={value}>
                        {themeLabels[value]}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ThemeSwitcher
