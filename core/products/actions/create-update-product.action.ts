

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

const prepareImages = async (images: string[]): Promise<string[]> => {

    const filesImages = images.filter(img => img.includes('file'));
    const currentImages = images.filter(img => !img.includes('file'));


    if (filesImages.length > 0) {
        const uploadPromises = filesImages.map(img => uploadImages(img));

        const uploadedImages = await Promise.all(uploadPromises);

        currentImages.push(...uploadedImages);
    }


    return currentImages.map(img => img.split('/').pop()!);
}

const uploadImages = async (image: string): Promise<string> => {

    return image;
}

const updateProduct = async (product: Partial<Product>) => {

    const { id, images = [], user, ...rest } = product;

    try {

        const checkImages = await prepareImages(images);

        const { data } = await productsApi.patch<Product>(`/products/${id}`, {
            ...rest,
            images: checkImages,
        });

        return data;

    } catch (error) {
        throw new Error('Error al actualizar el producto');
    }

}

const createProduct = async (product: Partial<Product>) => {

    const { id, images = [], user, ...rest } = product;

    try {

        const checkImages = await prepareImages(images);

        const { data } = await productsApi.post<Product>('/products', {
            ...rest,
            images: checkImages,
        });
        return data;

    } catch (error) {
        throw new Error('Error al crear el producto');
    }
}

