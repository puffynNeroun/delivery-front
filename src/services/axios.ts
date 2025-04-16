// src/services/axios.ts
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true, // 💡 обязательно для отправки куков
    headers: {
        'Content-Type': 'application/json',
    },
});

// 🔁 Интерцептор для авто-обновления access_token
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url.includes('/auth/refresh')
        ) {
            originalRequest._retry = true;

            try {
                // пробуем обновить токен
                await axiosInstance.post('/auth/refresh');

                // повторяем оригинальный запрос
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error('🔁 Ошибка обновления токена:', refreshError);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
