import type { Meta, StoryObj } from '@storybook/react'

import Sidebar from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme/ThemeContext'

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}
