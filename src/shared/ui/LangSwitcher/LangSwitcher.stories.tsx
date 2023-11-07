import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';

const meta = {
  title: 'shared/LangSwitcher',
  component: LangSwitcher,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
};
export const SECONDARY: Story = {

};
// Dark.decorators = [ThemeDecorator(Theme.SECONDARY)];
