import { Alert } from "react-native"

import { createUpdateProduct } from "@/core/products/actions/create-update-product.action"
import { getProductById } from "@/core/products/actions/get-product-by-id.action"
import { type Product } from "@/core/products/interfaces/product.interface"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRef } from "react"

export const useProduct = (productId: string) => {

    const queryClient = useQueryClient();
    const productIdRef = useRef(productId);

    const productQuery = useQuery({
        queryKey: ['products', productId],
        queryFn: () => getProductById(productId),
        staleTime: 1000 * 60 * 60,
    })

    //Mutación
    const productMutation = useMutation({
        mutationFn: async (data: Product) => createUpdateProduct({
            ...data,
            id: productIdRef.current,
        }),

        onSuccess: (data: Product) => {
            productIdRef.current = data.id;

            // Invalidar product queries
            queryClient.invalidateQueries({ queryKey: ['products', 'infinite'] });
            queryClient.invalidateQueries({ queryKey: ['products', data.id] });

            Alert.alert('Producto actualizado', `${data.title} ha sido actualizado correctamente.`);
        },

        onError: () => {
            const serverMessage = 'No se pudo actualizar el producto';

            Alert.alert('Error al actualizar', serverMessage);
        },
    })

    return {
        productQuery,
        productMutation
    }
}
