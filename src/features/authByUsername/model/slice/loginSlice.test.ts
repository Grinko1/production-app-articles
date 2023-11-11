import { loginActions, loginReducer } from './loginSlice';
import { type LoginSchema } from '../types/loginSchema';

describe('loginSlice.test description', () => {
  test('should change username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'first'
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('second'))
    ).toEqual({ username: 'second' });
  });
  test('should change password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '111'
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('222'))
    ).toEqual({ password: '222' });
  });
  test('should reset login data', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'name',
      password: '111'
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.resetData())
    ).toEqual({ username: '', password: '' });
  });
});
