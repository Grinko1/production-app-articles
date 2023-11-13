import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from 'shared/consts/common';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: Currency.RUB,
      avatar
    }
  }
};
export const WithError: Story = {
  args: {
    error: 'true'
  }
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};
