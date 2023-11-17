import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classname'
import AppButton from 'shared/ui/AppButton/AppButton'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
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
            <AppButton data-testid="toggle" onClick={handleClick}>
                {t('toggle')}
            </AppButton>

            <div className={styles.switchers}>
                <ThemeSwitcher inverted={true} />
                <LanguageSwitcher inverted={true} />
            </div>
        </div>
    )
}

export default Sidebar
