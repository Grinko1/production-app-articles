import { type StateSchema } from 'app/providers/storeProvider';

export const getAuthData = (state: StateSchema) => state.user.authData;
export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;
export const getUserInited = (state: StateSchema) => state.user._inited;
