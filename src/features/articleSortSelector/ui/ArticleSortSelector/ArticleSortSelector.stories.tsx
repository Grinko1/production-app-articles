import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from 'entities/Article';

const meta = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    order: 'asc',
    sort: ArticleSortField.TITLE
  }
};
export const Dark: Story = {
  args: {
    order: 'asc',
    sort: ArticleSortField.TITLE
  }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
