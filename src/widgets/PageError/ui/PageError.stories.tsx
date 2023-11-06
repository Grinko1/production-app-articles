import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { PageError } from './PageError';


const meta = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
   
  },

} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {
  args: { },
};
export const Dark: Story = {
  args: { },
};
Dark.decorators=[ ThemeDecorator(Theme.DARK)]





