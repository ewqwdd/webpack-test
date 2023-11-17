import type { Meta, StoryObj } from '@storybook/react'

import AppButton, { ThemeButton } from './AppButton'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme/ThemeContext'

const meta = {
    title: 'shared/AppButton',
    component: AppButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button'
    }
}

export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button'
    },
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button'
    }

}

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button'
    },
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}
