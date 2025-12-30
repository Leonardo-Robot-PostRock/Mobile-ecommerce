import { Ionicons } from '@expo/vector-icons';
import { LinkProps } from 'expo-router';

import { KeyboardAvoidingView, PressableProps, ScrollView, TextInputProps, useWindowDimensions, View } from 'react-native';

import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';

export interface InputField extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap,
}

interface Props {
    title: string;
    subtitle: string;
    inputs: InputField[];
    buttonText: string;
    onButtonPress?: PressableProps['onPress'];
    linkText: string;
    linkLabel: string;
    linkHref: string;
}

const AuthForm = ({
    title,
    subtitle,
    inputs,
    buttonText,
    onButtonPress,
    linkText,
    linkLabel,
    linkHref,
}: Props) => {
    const { height } = useWindowDimensions();
    const backgroundColor = useThemeColor({}, 'background');

    return (
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
                    {inputs.map((input, index) => (
                        <ThemedTextInput
                            key={index}
                            placeholder={input.placeholder}
                            keyboardType={input.keyboardType}
                            secureTextEntry={input.secureTextEntry}
                            autoCapitalize={input.autoCapitalize}
                            icon={input.icon}
                        />
                    ))}
                </View>

                <View style={{ marginTop: 10 }} />

                <ThemedButton
                    onPress={onButtonPress}
                    icon='arrow-forward-outline'
                >
                    {buttonText}
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
    );
};

export default AuthForm;
