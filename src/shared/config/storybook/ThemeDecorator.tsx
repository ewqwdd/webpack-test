/* eslint-disable react/display-name */
import 'app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import { type Theme } from '../theme/ThemeContext'
import { classNames } from 'shared/lib/classname'

export const ThemeDecorator: (theme: Theme) => Decorator = (theme) => (Story) => (
    <div className={classNames('app', {}, [theme])} >
        <Story />
    </div>
)
