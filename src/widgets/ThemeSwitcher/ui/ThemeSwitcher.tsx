import useTheme from 'shared/config/theme/useTheme'
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton'
import Theme from 'shared/icons/theme.svg'
import { type HTMLAttributes } from 'react'
import styles from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classname'

interface ThemeSwitcherProps extends HTMLAttributes<HTMLButtonElement> {
    inverted?: boolean
}

const ThemeSwitcher = ({ inverted, ...props }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme()

    return (
        <AppButton
            {...props}
            onClick={() => {
                toggleTheme()
            }}
            theme={ThemeButton.CLEAR}
        >
            <Theme className={classNames(styles.themeSwitcher, { [styles.inverted]: inverted })} />
        </AppButton>
    )
}

export default ThemeSwitcher
