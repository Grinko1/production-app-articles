import { type StateSchema } from 'app/providers/storeProvider';
import { getCounter, getCounterValue } from './getCounter';

describe('getCounter selector', () => {
  test('get value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 3
      }
    };
    expect(getCounterValue(state as StateSchema)).toBe(3);
  });
  test(' get value if value undefined', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: undefined
      }
    };
    expect(getCounterValue(state as StateSchema)).toBe(undefined);
  });
  test('get all counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 3
      }
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 3 });
  });
});
