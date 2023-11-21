import { classNames } from 'shared/lib/classname'
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Modal } from 'widgets/Modal'
import AppButton, { SizeButton, ThemeButton } from 'shared/ui/AppButton/AppButton'
import useTheme from 'shared/config/theme/useTheme'
import { Theme } from 'shared/config/theme/ThemeContext'

interface NavBarProps {
    className?: string
}

const NavBar = ({ className }: NavBarProps) => {
    const [isModal, setIsModal] = useState<boolean>(false)
    const { t } = useTranslation()
    const { theme } = useTheme()

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Modal isOpen={isModal} onClose={() => { setIsModal(false) }}>
                <p>
                    {'dassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'}
                </p>
            </Modal>
            <div className={styles.links}>
                <AppButton theme={ThemeButton.OUTLINE} size={SizeButton.M} inverted={theme === Theme.light} className={styles.login} onClick={() => { setIsModal(true) }}>
                    {t('Login')}
                </AppButton>
            </div>
        </div>
    )
}

export default NavBar
