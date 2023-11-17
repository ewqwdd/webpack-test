import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'

export default function NotFound() {
    const { t } = useTranslation()

    return (
        <div className={styles.notFound}>
            {t('Page not found.')}
        </div>
    )
};
