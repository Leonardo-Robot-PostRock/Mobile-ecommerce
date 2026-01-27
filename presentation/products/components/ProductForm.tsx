import { FormikHelpers } from 'formik';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Product, Size } from '@/core/products/interfaces/product.interface';
import ProductImages from '@/presentation/products/components/ProductImages';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedButtonGroup from '@/presentation/theme/components/ThemedButtonGroup';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { ThemedView } from '@/presentation/theme/components/ThemedView';
import FormContainer from '@/shared/components/FormContainer';

interface ProductFormProps {
    initialValues: Product;
    onSubmit: (values: Product, formikHelpers: FormikHelpers<Product>) => void;
    isPending?: boolean;
    buttonLabel?: string;
}

const ProductForm = ({
    initialValues,
    onSubmit,
    isPending = false,
    buttonLabel = 'Guardar'
}: ProductFormProps) => {

    const toggleInArray = <T,>(array: T[], item: T): T[] =>
        array.includes(item)
            ? array.filter(i => i !== item)
            : [...array, item];

    return (
        <FormContainer
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({ handleChange, setFieldValue, handleSubmit, values }) => (
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <ScrollView>
                        <ProductImages images={values.images} />

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

                        <ThemedView style={{ marginHorizontal: 10 }}>
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
                                icon="pencil-outline"
                                onPress={() => handleSubmit()}
                                disabled={isPending}
                            >
                                {buttonLabel}
                            </ThemedButton>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            )}
        </FormContainer>
    );
};

export default ProductForm;