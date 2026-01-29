

import productsApi from '@/core/api/productsApi';
import { Product } from '../interfaces/product.interface';

export const createUpdateProduct = (product: Partial<Product>) => {

    const payload: Partial<Product> = { ...product };

    payload.stock = isNaN(Number(payload.stock)) ? 0 : Number(payload.stock)
    payload.price = isNaN(Number(payload.price)) ? 0 : Number(payload.price)


    if (payload.id && payload.id !== 'new') {
        return updateProduct(payload)
    }

    return createProduct(payload)
}

const updateProduct = async (product: Partial<Product>) => {

    const { id, images = [], user, ...rest } = product;

    try {
        const { data } = await productsApi.patch<Product>(`/products/${id}`, {
            ...rest
        });

        return data;

    } catch (error) {
        throw new Error('Error al actualizar el producto');
    }

}

const createProduct = async (product: Partial<Product>) => {

    const { id, images = [], user, ...rest } = product;

    try {
        const { data } = await productsApi.post<Product>('/products', {
            ...rest
        });
        return data;

    } catch (error) {
        throw new Error('Error al crear el producto');
    }
}

