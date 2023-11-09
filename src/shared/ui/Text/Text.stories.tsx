import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Text, TextAlign, TextSize, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'text',
    title: 'title'
  }
};
export const Inverted: Story = {
  args: {
    theme: TextTheme.INVERTED,
    text: 'text',
    title: 'title'
  }
};
export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    text: 'text',
    title: 'title'
  }
};

export const PrimaryDarkTheme: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'text',
    title: 'title'
  }
};
export const InvertedDarkTheme: Story = {
  args: {
    theme: TextTheme.INVERTED,
    text: 'text',
    title: 'title'
  }
};
export const ErrorDarkTheme: Story = {
  args: {
    theme: TextTheme.ERROR,
    text: 'text',
    title: 'title'
  }
};

PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
InvertedDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
ErrorDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryRight: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'text',
    title: 'title',
    align: TextAlign.RIGHT
  }
};
export const PrimaryCenter: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'text',
    title: 'title',
    align: TextAlign.CENTER
  }
};
export const PrimaryLeft: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'text',
    title: 'title',
    align: TextAlign.LEFT
  }
};

export const PrimaryCenterSizeS: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'text',
    title: 'title',
    align: TextAlign.CENTER,
    size: TextSize.S
  }
};

export const PrimaryCenterSizeM: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'text',
    title: 'title',
    align: TextAlign.CENTER,
    size: TextSize.M
  }
};

export const PrimaryCenterSizeL: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    text: 'text',
    title: 'title',
    align: TextAlign.CENTER,
    size: TextSize.L
  }
};
