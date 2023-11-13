import { classNames } from 'shared/lib/classname'
import styles from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavBarProps {
    className?: string
}

const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to="/">Main</AppLink>
            </div>
        </div>
    )
}

export default NavBar
