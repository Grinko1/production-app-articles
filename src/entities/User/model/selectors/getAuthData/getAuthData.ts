import { type StateSchema } from 'app/providers/storeProvider';

export const getAuthData = (state: StateSchema) => state.user.authData;
