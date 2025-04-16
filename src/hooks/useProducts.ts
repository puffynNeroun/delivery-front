// src/hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/product";
import { Product } from "../types/Product";

export const useProducts = (category: string) => {
    return useQuery<Product[]>({
        queryKey: ["products", category],
        queryFn: () => getProducts(category),
    });
};

