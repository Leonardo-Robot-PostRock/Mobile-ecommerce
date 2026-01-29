import productsApi, { API_URL } from "@/core/api/productsApi";
import { Gender, Product } from "../interfaces/product.interface";

const emptyProduct: Product = {
    id: '',
    title: '',
    description: '',
    price: 0,
    slug: '',
    stock: 0,
    images: [],
    gender: Gender.Men,
    sizes: [],
    tags: []
}

export const getProductById = async (id: string): Promise<Product> => {

    if (id === 'new') return emptyProduct;


    try {
        const { data } = await productsApi.get<Product>(`/products/${id}`);
        return {
            ...data,
            images: data.images.map((image) => `${API_URL}/files/product/${image}`)
        };

    } catch (error) {
        throw new Error('Unable to load product')
    }
}