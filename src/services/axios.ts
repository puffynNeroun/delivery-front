// src/services/axios.ts
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true, // важно для работы с cookie (если токен в cookie)
    headers: {
        'Content-Type': 'application/json',
    },
});

// 👉 Добавим интерцептор на запрос
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 👉 (опционально) Обработка ошибок ответов
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('❌ Axios error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

