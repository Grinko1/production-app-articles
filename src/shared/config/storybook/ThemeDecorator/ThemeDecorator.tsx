import { type Story } from '@storybook/react';
import { ThemeProvider, type Theme } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`} style={{ width: '100vw' }}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
