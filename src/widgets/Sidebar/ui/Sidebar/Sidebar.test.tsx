import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { withTranslation } from 'react-i18next';

import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('sidebar test', () => {
  test('render sidebar', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    ComponentRender(<SidebarWithTranslation />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('toggle sidebar', () => {
    // first render
    const SidebarWithTranslation = withTranslation()(Sidebar);
    ComponentRender(<SidebarWithTranslation />);
    // get btn
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    // click
    fireEvent.click(toggleBtn);
    // expect class
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
