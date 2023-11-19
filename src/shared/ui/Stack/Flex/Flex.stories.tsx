import { Flex } from './Flex';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

const meta = {
  title: 'shared/Flex',
  component: Flex,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'row'
  }
};
Row.decorators = [ThemeDecorator(Theme.DARK)];

export const Column: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'column'
  }
};
export const RowGap4: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'row',
    gap: '4'
  }
};

export const RowGap8: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'row',
    gap: '8'
  }
};

export const RowGap16: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'row',
    gap: '16'
  }
};

export const RowGap32: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'row',
    gap: '32'
  }
};

export const ColumnGap16: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'column',
    gap: '16'
  }
};

export const ColumnAlignEnd: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
    direction: 'column',
    align: 'end'
  }
};
