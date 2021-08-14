export type Roles= 'admin' | 'user';

export interface User{
    username: string;
    password: string;
}

export interface UserResponse{
    mensaje: string;
    token:string;
    role: Roles;
}