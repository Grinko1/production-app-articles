import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: (
      <div>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius debitis
        nesciunt tempore optio maiores exercitationem vel quam itaque. Quis,
        debitis sed hic voluptatem sapiente unde iusto quia incidunt
        consequuntur modi, ducimus, quibusdam in magni? Quasi numquam amet,
        velit quod fugit, recusandae enim eveniet nesciunt blanditiis
        repellendus, corrupti excepturi error saepe.
      </div>
    ),
    isOpen: true
  }
};
export const Dark: Story = {
  args: {
    children: (
      <div>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius debitis
        nesciunt tempore optio maiores exercitationem vel quam itaque. Quis,
        debitis sed hic voluptatem sapiente unde iusto quia incidunt
        consequuntur modi, ducimus, quibusdam in magni? Quasi numquam amet,
        velit quod fugit, recusandae enim eveniet nesciunt blanditiis
        repellendus, corrupti excepturi error saepe.
      </div>
    ),
    isOpen: true
  }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
