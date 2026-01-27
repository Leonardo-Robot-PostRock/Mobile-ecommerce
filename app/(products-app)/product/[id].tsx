import { Ionicons } from '@expo/vector-icons';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Size } from '@/core/products/interfaces/product.interface';
import ProductImages from '@/presentation/products/components/ProductImages';
import { useProduct } from '@/presentation/products/hooks/useProduct';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedButtonGroup from '@/presentation/theme/components/ThemedButtonGroup';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { ThemedView } from '@/presentation/theme/components/ThemedView';
import { Formik } from 'formik';

const ProductScreen = () => {

  const { id } = useLocalSearchParams()

  const navigation = useNavigation();

  const { productQuery } = useProduct(`${id}`);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="camera-outline" size={25} />,
    })
  }, [])

  useEffect(() => {
    if (productQuery.data) {
      navigation.setOptions({
        title: productQuery.data.title.slice(0, 16) + (productQuery.data.title.length > 14 ? '...' : ''),
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

  const toggleInArray = <T,>(array: T[], item: T): T[] =>
    array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];


  return (
    <Formik
      initialValues={product}
      onSubmit={(productLike) => console.log(productLike)}
    >
      {({ handleChange, setFieldValue, handleSubmit, values }) => (

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView>

            <ProductImages
              images={values.images}
            />

            <ThemedView style={{ marginHorizontal: 10, marginTop: 10 }}>
              <ThemedTextInput
                placeholder='Título'
                style={{ marginVertical: 5 }}
                value={values.title}
                onChangeText={handleChange('title')}
              />

              <ThemedTextInput
                placeholder='Slug'
                style={{ marginVertical: 5 }}
                value={values.slug}
                onChangeText={handleChange('slug')}
              />

              <ThemedTextInput
                placeholder='Descripción'
                multiline
                numberOfLines={4}
                style={{ marginVertical: 5 }}
                value={values.description}
                onChangeText={handleChange('description')}
              />
            </ThemedView>

            <ThemedView
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                flexDirection: 'row',
                gap: 10
              }}
            >
              <ThemedTextInput
                placeholder='Precio'
                keyboardType='numeric'
                style={{ flex: 1 }}
                value={values.price.toString()}
                onChangeText={handleChange('price')}
              />

              <ThemedTextInput
                placeholder='Stock'
                keyboardType='numeric'
                style={{ flex: 1 }}
                value={values.stock.toString()}
                onChangeText={handleChange('stock')}
              />
            </ThemedView>

            <ThemedView
              style={{
                marginHorizontal: 10,
              }}
            >
              <ThemedButtonGroup
                options={['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']}
                selectedOption={values.sizes}
                onSelect={(SelectedOption) => {
                  const newSizes = toggleInArray<Size>(values.sizes, SelectedOption as Size);
                  setFieldValue('sizes', newSizes);
                }}
              />

              <ThemedButtonGroup
                options={['kid', 'men', 'women', 'unisex']}
                selectedOption={[values.gender]}
                onSelect={(selectedOption) => setFieldValue('gender', selectedOption)}
              />
            </ThemedView>

            <View
              style={{
                marginHorizontal: 10,
                marginBottom: 50,
                marginTop: 20,
              }}
            >
              <ThemedButton
                style={{ height: 60 }}
                icon="save-outline"
                onPress={() => console.log('Guardar')}
              >
                Guardar
              </ThemedButton>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  )
}

export default ProductScreen