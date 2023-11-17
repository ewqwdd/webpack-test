import { useTranslation } from 'react-i18next'
import styles from './PageError.module.scss'
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton'

export default function PageError() {
    const { t } = useTranslation()

    const handleRefresh = () => {
        location.reload()
    }

    return (
        <div className={styles.page}>
            <h1>
                {t('Oops! Something went wrong.')}
            </h1>
            <AppButton onClick={handleRefresh} theme={ThemeButton.CLEAR}>
                {t('refresh')}
            </AppButton>
        </div>
    )
};
