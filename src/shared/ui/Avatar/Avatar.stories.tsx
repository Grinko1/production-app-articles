import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from './storybook.jpg';
import { Avatar } from './Avatar';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarBig: Story = {
  args: {
    size: 150,
    src: AvatarImg
  }
};
export const AvatarSmall: Story = {
  args: {
    size: 50,
    src: AvatarImg
  }
};
