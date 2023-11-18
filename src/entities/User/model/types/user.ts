export interface User {
  id: string;
  username: string;
  roles?: Roles[];
}

type Roles = 'ADMIN' | 'USER' | 'MANAGER';

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
