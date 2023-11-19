import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classname'
import AppButton, { SizeButton, ThemeButton } from 'shared/ui/AppButton/AppButton'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import HomeIcon from 'shared/icons/home.svg'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const { t } = useTranslation()

    const handleClick = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed })}
        >
            <div className={styles.sideLinks}>
                <AppLink to={'/'} theme={AppLinkTheme.INVERTED} className={styles.item}>
                    <HomeIcon />
                    <span className={styles.link}>
                        {t('Main')}
                    </span>
                </AppLink>
            </div>
            <AppButton data-testid="toggle" onClick={handleClick} square size={SizeButton.XL} theme={ThemeButton.CLEAR} inverted className={styles.toggle}>
                {collapsed ? '>' : '<'}
            </AppButton>

            <div className={styles.switchers}>
                <ThemeSwitcher inverted={true} />
                <LanguageSwitcher inverted={true} />
            </div>
        </div>
    )
}

export default Sidebar
