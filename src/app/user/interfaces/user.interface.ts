export interface User {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    role: Role;
}

export enum Role {
  User = 'User',
  Admin = 'Admin'
}
