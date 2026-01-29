import { Ionicons } from '@expo/vector-icons';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Product } from '@/core/products/interfaces/product.interface';
import ProductForm from '@/presentation/products/components/ProductForm';
import { useProduct } from '@/presentation/products/hooks/useProduct';

const ProductScreen = () => {

  const { id } = useLocalSearchParams()

  const navigation = useNavigation();

  const { productQuery, productMutation } = useProduct(`${id}`);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="camera-outline" size={25} />,
    })
  }, [])

  useEffect(() => {
    if (productQuery.data) {
      navigation.setOptions({
        title: productQuery.data.title.slice(0, 14) + (productQuery.data.title.length > 14 ? '...' : ''),
      })
    }
  }, [productQuery.data])

  if (productQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={30} />
      </View>
    )
  }

  if (!productQuery.data) {
    return <Redirect href='/(products-app)/(home)' />
  }

  const product = productQuery.data!;

  const handleSubmit = (values: Product) => {
    productMutation.mutate(values);
  }

  return (
    <ProductForm
      initialValues={product}
      onSubmit={handleSubmit}
      isPending={productMutation.isPending}
      buttonLabel="Actualizar producto"
    />
  )
}

export default ProductScreen;