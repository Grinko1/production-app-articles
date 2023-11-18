import { type StateSchema } from 'app/providers/storeProvider';
import {
  getProfileData,
  getProfileForm,
  getProfileIsLoading
} from './getProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileData.test description', () => {
  test('should return data', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: Currency.RUB
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
        form: {},
        isLoading: false,
        error: 'string',
        validateErrors: [],
        readonly: true
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should return form', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: Currency.RUB
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {},
        form: data,
        isLoading: false,
        error: 'string',
        validateErrors: [],
        readonly: true
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
});
