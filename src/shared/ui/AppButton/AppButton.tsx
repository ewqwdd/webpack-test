import { type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classname'
import styles from './AppButton.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
    size?: SizeButton
    square?: boolean
    inverted?: boolean
}

const AppButton = ({ className, children, theme, size, square, inverted, ...props }: AppButtonProps) => {
    return (
        <button className={classNames(styles.Button,
            { [styles.square]: square, [styles.inverted]: inverted },
            [styles[theme], styles[size], className])} {...props}>
            {children}
        </button>
    )
}

export default AppButton
