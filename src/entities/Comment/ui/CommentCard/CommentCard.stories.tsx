import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'entities/comment/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' }
    }
  }
};
Normal.decorators = [StoreDecorator({})];
export const Loading: Story = {
  args: {}
};
