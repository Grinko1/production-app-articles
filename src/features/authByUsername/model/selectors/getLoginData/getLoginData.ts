import { type StateSchema } from 'app/providers/storeProvider';

export const getUsername = (state: StateSchema) => state?.login?.username ?? '';
export const getPassword = (state: StateSchema) => state.login?.password ?? '';
export const getIsLoading = (state: StateSchema) => state.login?.isLoading ?? false;
export const getError = (state: StateSchema) => state.login?.error || '';
