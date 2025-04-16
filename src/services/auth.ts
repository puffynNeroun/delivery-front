import { axiosInstance } from './axios';

export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto {
    name: string;
    email: string;
    password: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
}

export const login = async (credentials: LoginDto): Promise<{ accessToken: string; user: User }> => {
    const res = await axiosInstance.post('/auth/login', credentials);
    return res.data;
};

export const register = async (payload: RegisterDto): Promise<{ accessToken: string; user: User }> => {
    const res = await axiosInstance.post('/auth/register', payload);
    return res.data;
};

export const getMe = async (): Promise<User> => {
    const res = await axiosInstance.get('/auth/me');
    return res.data;
};

export const logout = async (): Promise<void> => {
    await axiosInstance.post('/auth/logout');
};
