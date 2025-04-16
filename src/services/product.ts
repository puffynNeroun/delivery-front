import { axiosInstance } from "./axios";
import { Product } from "../types/Product";

/**
 * Получить список всех продуктов
 * GET /api/products
 */
export const getProducts = async (category?: string): Promise<Product[]> => {
    const query = category && category !== 'Все' ? `?category=${encodeURIComponent(category)}` : '';
    const response = await axiosInstance.get(`/products${query}`);
    return response.data;
};


/**
 * Получить один продукт по ID
 * GET /api/products/:id
 */
export const getProductById = async (id: string): Promise<Product> => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
};

/**
 * Создать новый продукт (только для администратора)
 * POST /api/products
 */
export const createProduct = async (product: Omit<Product, "id">) => {
    const response = await axiosInstance.post("/products", product);
    return response.data;
};

/**
 * Обновить продукт по ID (только для администратора)
 * PUT /api/products/:id
 */
export const updateProduct = async (
    id: string,
    updatedProduct: Partial<Product>
) => {
    const response = await axiosInstance.put(`/products/${id}`, updatedProduct);
    return response.data;
};

/**
 * Удалить продукт по ID (только для администратора)
 * DELETE /api/products/:id
 */
export const deleteProduct = async (id: string) => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
};
