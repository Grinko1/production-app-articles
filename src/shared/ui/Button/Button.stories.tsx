import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ouline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Button'
  }
};
export const OulineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Button'
  }
};
OulineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button'
  }
};

export const SecondaryDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button'
  }
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Large: Story = {
  args: {
    size: ButtonSize.XL,
    children: 'Button'
  }
};

export const Small: Story = {
  args: {
    size: ButtonSize.M,
    children: 'Button'
  }
};
