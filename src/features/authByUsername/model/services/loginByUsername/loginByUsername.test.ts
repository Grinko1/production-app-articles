/* eslint-disable no-multiple-empty-lines */
import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';

jest.mock('axios');
// @ts-expect-error why true
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test description', () => {
  test('success', async () => {
    const userData = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userData)
    );
  });
  test('403 error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});

// import axios from 'axios';
// import { loginByUsername } from './loginByUsername';
// import { type Dispatch } from 'react';
// import { type StateSchema } from 'app/providers/storeProvider';
// import { userActions } from 'entities/User';

// jest.mock('axios');
// // @ts-expect-error why true
// const mockedAxios = jest.mocked(axios, true);

// describe('loginByUsername.test description', () => {
//   // @ts-expect-error check whats wromg
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;
//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });
//   test('success', async () => {
//     const userData = { username: '123', id: '1' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

//     const action = loginByUsername({ username: '123', password: '123' });
//     const result = await action(dispatch, getState, undefined);
//     expect(result.meta.requestStatus).toBe('fulfilled');
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
//   });
//   test('403 error', async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

//     const action = loginByUsername({ username: '123', password: '123' });
//     const result = await action(dispatch, getState, undefined);

//     expect(result.meta.requestStatus).toBe('rejected');
//     expect(dispatch).toHaveBeenCalledTimes(2);
//   });
// });
