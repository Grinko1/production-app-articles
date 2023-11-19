export interface User {
  id: string;
  username: string;
  roles?: Roles[];
  avatar?: string;
}

type Roles = 'ADMIN' | 'USER' | 'MANAGER';

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
