import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
  args: {}
};
Error.decorators = [
  StoreDecorator({
    login: {
      username: 'sjsf',
      password: '111',
      error: 'Wrong password or username'
    }
  })
];

export const Loading: Story = {
  args: {}
};
Loading.decorators = [
  StoreDecorator({
    login: {
      username: 'sjsf',
      password: '111',
      isLoading: true
    }
  })
];
