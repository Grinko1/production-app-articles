import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'center'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'link',
    theme: AppLinkTheme.PRIMARY,
    to: '/'
  }
};
export const Secondary: Story = {
  args: {
    children: 'link',
    to: '/',
    theme: AppLinkTheme.SECONDARY
  }
};
export const Red: Story = {
  args: {
    children: 'link',
    to: '/',
    theme: AppLinkTheme.RED
  }
};

export const PrimaryDarkTheme: Story = {
  args: {
    children: 'link',
    theme: AppLinkTheme.PRIMARY,
    to: '/'
  }
};
PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
export const SecondaryDarkTheme: Story = {
  args: {
    children: 'link',
    to: '/',
    theme: AppLinkTheme.SECONDARY
  }
};
SecondaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
export const RedDarkTheme: Story = {
  args: {
    children: 'link',
    to: '/',
    theme: AppLinkTheme.RED
  }
};
RedDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
