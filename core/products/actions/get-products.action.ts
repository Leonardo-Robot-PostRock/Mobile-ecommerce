import productsApi from "@/core/api/productsApi";
import { Product } from "../interfaces/product.interface";

export const getProducts = async (limit = 20, offset = 0) => {
    try {
        const { data } = await productsApi.get<Product[]>('/products', {
            params: {
                limit,
                offset
            }
        });

        return data;

    } catch (error) {
        throw new Error('Unable to load products')
    }
}