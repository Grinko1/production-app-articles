import { type StateSchema } from 'app/providers/storeProvider';
import {
  getError,
  getIsLoading,
  getPassword,
  getUsername
} from './getLoginData';

describe('getLoginData selector', () => {
  test('get username', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'name'
      }
    };
    expect(getUsername(state as StateSchema)).toBe('name');
  });
  test('get password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '123'
      }
    };
    expect(getPassword(state as StateSchema)).toBe('123');
  });
  test('get isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true
      }
    };
    expect(getIsLoading(state as StateSchema)).toBe(true);
  });
  test('get error', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'error'
      }
    };
    expect(getError(state as StateSchema)).toEqual('error');
  });
  test('empty username', () => {
    const state: DeepPartial<StateSchema> = {
      login: {}
    };
    expect(getUsername(state as StateSchema)).toEqual('');
  });
});
