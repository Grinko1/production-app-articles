import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from 'entities/Article/model/consts/consts';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

const meta = {
  title: 'entities/article/ArticleViewSelector',
  component: ArticleViewSelector,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    view: ArticleView.SMALL
  }
};

export const SmallDark: Story = {
  args: {
    view: ArticleView.SMALL
  }
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];
