import { Redirect, router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Product } from '@/core/products/interfaces/product.interface';
import { useCameraStore } from '@/presentation/camera/store/useCameraStore';
import ProductForm from '@/presentation/products/components/ProductForm';
import { useProduct } from '@/presentation/products/hooks/useProduct';
import MenuIconButton from '@/presentation/theme/components/MenuIconButton';

const ProductScreen = () => {

  const { id } = useLocalSearchParams();

  const { selectedImages, clearImages } = useCameraStore();

  const navigation = useNavigation();

  const { productQuery, productMutation } = useProduct(`${id}`);

  useEffect(() => {

    return () => {
      clearImages();
    }
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        <MenuIconButton
          onPress={() => router.push('/camera')}
          icon='camera-outline'
        />,
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
      selectedImages={selectedImages}
      onSubmit={handleSubmit}
      isPending={productMutation.isPending}
    />
  )
}

export default ProductScreen;