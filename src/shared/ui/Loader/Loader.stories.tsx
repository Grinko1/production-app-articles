import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';


const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LigthTheme: Story = {
};
export const DarkTheme: Story = {

};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
