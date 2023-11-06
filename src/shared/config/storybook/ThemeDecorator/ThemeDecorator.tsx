import { Decorator, Story } from '@storybook/react';
import { Theme, useTheme } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <div className={`app ${theme}`} style={{width:'100vw'}}>
      <StoryComponent />
    </div>
  );
