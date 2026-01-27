import { LinkProps } from 'expo-router';

import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';

import { Formik, type FormikHelpers, type FormikProps } from 'formik';
import * as yup from 'yup';

import { type InputField } from '@/core/auth/interface/auth-form-inputs';

import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';

interface Props<T extends Record<string, any>> {
    title: string;
    subtitle: string;
    inputs: InputField<T>[];
    buttonText: string;
    linkText: string;
    linkLabel: string;
    linkHref: string;
    initialValues: T;
    validationSchema?: yup.ObjectSchema<T>;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<void>;
}

const AuthForm = <T extends Record<string, any>>({
    title,
    subtitle,
    inputs,
    buttonText,
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
        <Formik<T>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleSubmit, values, errors, touched, isSubmitting }: FormikProps<T>) => (
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
                                const name = input.name;
                                const hasError = (errors)[name] && (touched)[name] as boolean;
                                return (
                                    <View key={input.name}>
                                        <ThemedTextInput
                                            placeholder={input.placeholder}
                                            keyboardType={input.keyboardType}
                                            secureTextEntry={input.secureTextEntry}
                                            autoCapitalize={input.autoCapitalize}
                                            icon={input.icon}
                                            value={values[name]}
                                            onChangeText={handleChange(name)}
                                            editable={!isSubmitting}
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
                                                {(errors)[name] as string}
                                            </ThemedText>
                                        )}
                                    </View>
                                );
                            })}
                        </View>

                        <View style={{ marginTop: 10 }} />

                        <ThemedButton
                            onPress={handleSubmit as () => void}
                            icon='arrow-forward-outline'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Procesando...' : buttonText}
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
