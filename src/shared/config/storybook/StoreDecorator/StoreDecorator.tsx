import { type StateSchema } from 'app/providers/storeProvider';
import { type Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/storeProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
  (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
