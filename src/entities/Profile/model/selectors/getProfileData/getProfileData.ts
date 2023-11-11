import { type StateSchema } from 'app/providers/storeProvider';

export const getProfileData = (state: StateSchema) => state.profile?.data;

export const getProfileError = (state: StateSchema) => state.profile?.error;
export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
