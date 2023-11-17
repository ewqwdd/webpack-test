import { useTranslation } from 'react-i18next'

const Root = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('Main page')}
        </div>
    )
}

export default Root
