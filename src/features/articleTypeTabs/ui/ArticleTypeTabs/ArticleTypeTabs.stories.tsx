import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from 'entities/Article';

const meta = {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value: ArticleType.ALL
  }
};
export const Dark: Story = {
  args: {
    value: ArticleType.ECONOMICS
  }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
