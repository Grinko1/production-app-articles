import { type Country, type Currency } from 'shared/consts/common';
import { type ValidateProfileError } from '../consts/consts';

export enum validateProfileError {}
export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
  id?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[];
  readonly: boolean;
}
