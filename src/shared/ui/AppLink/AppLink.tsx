import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classname'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme
}

const AppLink = ({ className = '', to, children, theme = AppLinkTheme.PRIMARY }: AppLinkProps) => {
    return (
        <Link to={to} className={classNames(className, {}, [styles[theme]])}>
            {children}
        </Link>
    )
}

export default AppLink
