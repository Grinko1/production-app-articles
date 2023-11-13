import { type StateSchema } from 'app/providers/storeProvider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
export const getProfileForm = (state: StateSchema) => state.profile?.form;

export const getProfileError = (state: StateSchema) => state.profile?.error;
export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
