import { type Country, type Currency } from 'shared/consts/common';

export interface ProfileType {
  first: string;
  lastname: string;
  age: 22;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: ProfileType;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
