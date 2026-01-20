import { Ionicons } from '@expo/vector-icons';
import { LinkProps } from 'expo-router';

import { KeyboardAvoidingView, ScrollView, TextInputProps, useWindowDimensions, View } from 'react-native';

import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';

export interface InputField extends TextInputProps {
    name: string;
    icon?: keyof typeof Ionicons.glyphMap;
}

interface Props<T extends Record<string, any>> {
    title: string;
    subtitle: string;
    inputs: InputField[];
    buttonText: string;
    isLoading?: boolean;
    linkText: string;
    linkLabel: string;
    linkHref: string;
    initialValues: T;
    validationSchema: yup.Schema;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<void>;
}

const AuthForm = <T extends Record<string, any>>({
    title,
    subtitle,
    inputs,
    buttonText,
    isLoading = false,
    linkText,
    linkLabel,
    linkHref,
    initialValues,
    validationSchema,
    onSubmit,
}: Props<T>) => {
    const { height } = useWindowDimensions();
    const backgroundColor = useThemeColor({}, 'background');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleSubmit, values, errors, touched, isSubmitting, status }) => (
                <KeyboardAvoidingView
                    behavior='padding'
                    style={{ flex: 1 }}
                >
                    <ScrollView
                        style={{ paddingHorizontal: 40, backgroundColor }}
                    >
                        <View style={{ paddingTop: height * 0.35 }}>
                            <ThemedText type='title'>{title}</ThemedText>
                            <ThemedText style={{ color: 'grey' }}>{subtitle}</ThemedText>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            {inputs.map((input) => {
                                const hasError = errors[input.name] && touched[input.name];
                                return (
                                    <View key={input.name}>
                                        <ThemedTextInput
                                            placeholder={input.placeholder}
                                            keyboardType={input.keyboardType}
                                            secureTextEntry={input.secureTextEntry}
                                            autoCapitalize={input.autoCapitalize}
                                            icon={input.icon}
                                            value={values[input.name]}
                                            onChangeText={handleChange(input.name)}
                                            editable={!isSubmitting && !isLoading}
                                            style={{ marginBottom: hasError ? 0 : 10 }}
                                        />

                                        {hasError && (
                                            <ThemedText
                                                style={{
                                                    color: '#FF6B6B',
                                                    fontSize: 12,
                                                    marginTop: 2,
                                                    marginBottom: 4,
                                                    marginLeft: 4,
                                                }}
                                            >
                                                {String(errors[input.name])}
                                            </ThemedText>
                                        )}
                                    </View>
                                );
                            })}
                        </View>

                        {status?.error && (
                            <ThemedText
                                style={{
                                    color: '#FF6B6B',
                                    fontSize: 13,
                                    marginTop: 8,
                                    marginBottom: 8,
                                    textAlign: 'center',
                                }}
                            >
                                {typeof status.error === 'string' ? status.error : String(status.error)}
                            </ThemedText>
                        )}

                        <View style={{ marginTop: 10 }} />

                        <ThemedButton
                            onPress={handleSubmit as () => void}
                            icon='arrow-forward-outline'
                            disabled={isSubmitting || isLoading}
                        >
                            {isSubmitting || isLoading ? 'Procesando...' : buttonText}
                        </ThemedButton>

                        <View style={{ marginTop: 50 }} />

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ThemedText>{linkText}</ThemedText>
                            <ThemedLink
                                href={linkHref as LinkProps['href']}
                                style={{ marginHorizontal: 5 }}
                            >
                                {linkLabel}
                            </ThemedLink>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            )}
        </Formik>
    )
}
export default AuthForm;
