import productsApi, { API_URL } from "@/core/api/productsApi";
import { Product } from "../interfaces/product.interface";


export const getProductById = async (id: string): Promise<Product> => {
    try {
        const { data } = await productsApi.get<Product>(`/products/${id}`);
        return {
            ...data,
            images: data.images.map((image) => `${API_URL}/files/products/${image}`)
        };

    } catch (error) {
        throw new Error('Unable to load product')
    }
}