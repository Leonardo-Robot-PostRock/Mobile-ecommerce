import { useLocalSearchParams } from 'expo-router';
import { FormikHelpers } from 'formik';
import { KeyboardAvoidingView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Product, Size } from '@/core/products/interfaces/product.interface';
import ProductImages from '@/presentation/products/components/ProductImages';
import {
    BUTTON_STYLE,
    CONTAINER_BOTTOM_STYLE,
    DEFAULT_MARGIN,
    GENDER_OPTIONS,
    INPUT_MARGIN_STYLE,
    KEYBOARD_BEHAVIOR,
    ROW_STYLE,
    SIZE_OPTIONS,
    TEXT_INPUTS,
} from '@/presentation/products/constants/product-form';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedButtonGroup from '@/presentation/theme/components/ThemedButtonGroup';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { ThemedView } from '@/presentation/theme/components/ThemedView';
import FormContainer from '@/shared/components/FormContainer';

interface Props {
    initialValues: Product;
    selectedImages: string[];
    onSubmit: (values: Product, formikHelpers: FormikHelpers<Product>) => void;
    isPending?: boolean;
}

const ProductForm = ({
    initialValues,
    selectedImages,
    onSubmit,
    isPending = false,
}: Props) => {

    const { id } = useLocalSearchParams();

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
                        <ProductImages images={[...values.images, ...selectedImages]} />

                        <ThemedView style={{ marginHorizontal: DEFAULT_MARGIN, marginTop: 10 }}>
                            {TEXT_INPUTS.slice(0, 3).map((inputCfg) => (
                                <ThemedTextInput
                                    key={inputCfg.name}
                                    placeholder={inputCfg.placeholder}
                                    style={INPUT_MARGIN_STYLE}
                                    multiline={inputCfg.multiline}
                                    numberOfLines={inputCfg.numberOfLines}
                                    value={(values as any)[inputCfg.name] ?? ''}
                                    onChangeText={handleChange(inputCfg.name)}
                                />
                            ))}
                        </ThemedView>

                        <ThemedView style={ROW_STYLE}>
                            {TEXT_INPUTS.slice(3).map((inputCfg) => (
                                <ThemedTextInput
                                    key={inputCfg.name}
                                    placeholder={inputCfg.placeholder}
                                    keyboardType={inputCfg.keyboardType}
                                    style={{ flex: 1 }}
                                    value={(values as any)[inputCfg.name]?.toString() ?? ''}
                                    onChangeText={handleChange(inputCfg.name)}
                                />
                            ))}
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
                                {id === 'new' ? 'Crear producto' : 'Actualizar producto'}
                            </ThemedButton>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            )}
        </FormContainer>
    );
};

export default ProductForm;