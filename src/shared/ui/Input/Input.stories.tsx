import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputAutoFocusLight: Story = {
  args: {
    value: '',
    autoFocus: true,
    placeholder: 'input'
  }
};
export const InputSimple: Story = {
  args: {
    value: '',
    placeholder: 'input'
  }
};
export const InputAutoFocusDark: Story = {
  args: {
    value: '',
    autoFocus: true,
    placeholder: 'input'
  }
};
InputAutoFocusDark.decorators = [ThemeDecorator(Theme.DARK)];
