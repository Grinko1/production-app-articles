import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
Normal.decorators = [
  StoreDecorator({
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' }
    }
  })
];
export const Loading: Story = {
  args: {}
};
Loading.decorators = [
  StoreDecorator({
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' }
    }
  }),
  ThemeDecorator(Theme.DARK)
];
