import { type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classname'
import styles from './AppButton.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
}

const AppButton = ({ className, children, theme, ...props }: AppButtonProps) => {
    return (
        <button className={classNames(className, {}, [styles[theme]])} {...props}>
            {children}
        </button>
    )
}

export default AppButton
