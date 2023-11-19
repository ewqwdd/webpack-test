import type { Meta, StoryObj } from '@storybook/react'

import AppButton, { SizeButton, ThemeButton } from './AppButton'
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

export const SquareClearDarkMInverted: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.M,
        inverted: true
    },
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}

export const SquareClearDarkLInverted: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.L,
        inverted: true
    },
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}

export const SquareClearDarkXLInverted: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.XL,
        inverted: true
    },
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}

export const SquareClearMInverted: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.M,
        inverted: true
    }
}

export const SquareClearLInverted: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.L,
        inverted: true
    }
}

export const SquareClearXLInverted: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.XL,
        inverted: true
    }
}

export const SquareClearDarkM: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.M
    },
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}

export const SquareClearDarkL: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.L
    },
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}

export const SquareClearDarkXL: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.XL
    },
    decorators: [
        ThemeDecorator(Theme.dark)
    ]
}

export const SquareClearM: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.M
    }
}

export const SquareClearL: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.L
    }
}

export const SquareClearXL: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: '1',
        square: true,
        size: SizeButton.XL
    }
}
