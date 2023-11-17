import type { Meta, StoryObj } from '@storybook/react'

import Navbar from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme/ThemeContext'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        RouterDecorator
    ]
} satisfies Meta<typeof Navbar>

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
