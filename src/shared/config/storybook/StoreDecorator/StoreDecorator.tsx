import { type StateSchema } from 'app/providers/storeProvider';
import { type Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/storeProvider';
import { type ReducersMapObject } from 'redux';
import { loginReducer } from 'features/authByUsername';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
  profile: profileReducer
};
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
    (StoryComponent: Story) =>
      (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
      );
