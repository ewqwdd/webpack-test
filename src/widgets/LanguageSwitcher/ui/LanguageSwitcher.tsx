import { useTranslation } from 'react-i18next'
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton'
import styles from './LanguageSwitcher.module.scss'
import { classNames } from 'shared/lib/classname'
import { type HtmlHTMLAttributes } from 'react'

export enum Language {
    RU = 'ru',
    ENG = 'en',
}

interface LanguageSwitcherProps extends HtmlHTMLAttributes<HTMLDivElement> {
    inverted?: boolean
}

const LanguageSwitcher = ({
    inverted,
    className,
    ...props
}: LanguageSwitcherProps) => {
    const { i18n } = useTranslation()
    console.log(i18n.language)

    const toggleRu = async() => {
        await i18n.changeLanguage(Language.RU)
    }

    const toggleEng = async() => {
        await i18n.changeLanguage(Language.ENG)
    }

    return (
        <div className={classNames(styles.buttons, {}, [className])} {...props}>
            <AppButton
                theme={ThemeButton.CLEAR}
                disabled={i18n.language == Language.RU}
                onClick={toggleRu}
                className={classNames(styles.button, { [styles.inverted]: inverted })}
            >
                RU
            </AppButton>
            <AppButton
                theme={ThemeButton.CLEAR}
                disabled={i18n.language == Language.ENG}
                onClick={toggleEng}
                className={classNames(styles.button, { [styles.inverted]: inverted })}
            >
                EN
            </AppButton>
        </div>
    )
}

export default LanguageSwitcher
