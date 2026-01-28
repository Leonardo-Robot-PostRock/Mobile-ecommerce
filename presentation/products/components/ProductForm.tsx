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

interface Props {
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
}: Props) => {

    const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as const;
    const GENDER_OPTIONS = ['kid', 'men', 'women', 'unisex'] as const;

    const DEFAULT_MARGIN = 10;
    const INPUT_MARGIN_STYLE = { marginVertical: 5 } as const;
    const ROW_STYLE = { marginHorizontal: DEFAULT_MARGIN, marginVertical: 5, flexDirection: 'row', gap: 10 } as const;
    const CONTAINER_BOTTOM_STYLE = { marginHorizontal: DEFAULT_MARGIN, marginBottom: 50, marginTop: 20 } as const;
    const BUTTON_STYLE = { height: 60 } as const;
    const KEYBOARD_BEHAVIOR = Platform.OS === 'ios' ? 'padding' : undefined;

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
                <KeyboardAvoidingView behavior={KEYBOARD_BEHAVIOR}>
                    <ScrollView>
                        <ProductImages images={values.images} />

                        <ThemedView style={{ marginHorizontal: DEFAULT_MARGIN, marginTop: 10 }}>
                            <ThemedTextInput
                                placeholder='Título'
                                style={INPUT_MARGIN_STYLE}
                                value={values.title}
                                onChangeText={handleChange('title')}
                            />

                            <ThemedTextInput
                                placeholder='Slug'
                                style={INPUT_MARGIN_STYLE}
                                value={values.slug}
                                onChangeText={handleChange('slug')}
                            />

                            <ThemedTextInput
                                placeholder='Descripción'
                                multiline
                                numberOfLines={4}
                                style={INPUT_MARGIN_STYLE}
                                value={values.description}
                                onChangeText={handleChange('description')}
                            />
                        </ThemedView>

                        <ThemedView style={ROW_STYLE}>
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

                        <ThemedView style={{ marginHorizontal: DEFAULT_MARGIN }}>
                            <ThemedButtonGroup
                                options={SIZE_OPTIONS as unknown as string[]}
                                selectedOption={values.sizes}
                                onSelect={(SelectedOption) => {
                                    const newSizes = toggleInArray<Size>(values.sizes, SelectedOption as Size);
                                    setFieldValue('sizes', newSizes);
                                }}
                            />

                            <ThemedButtonGroup
                                options={GENDER_OPTIONS as unknown as string[]}
                                selectedOption={[values.gender]}
                                onSelect={(selectedOption) => setFieldValue('gender', selectedOption)}
                            />
                        </ThemedView>

                        <View style={CONTAINER_BOTTOM_STYLE}>
                            <ThemedButton style={BUTTON_STYLE} icon="pencil-outline" onPress={() => handleSubmit()} disabled={isPending}>
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