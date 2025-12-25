import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';

const LoginScreen = () => {
    const { height } = useWindowDimensions();

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={{ flex: 1 }}
        >
            <ScrollView
                style={{ paddingHorizontal: 40 }}
            >
                <View style={{
                    paddingTop: height * 0.35
                }}>

                    <ThemedText type='title'>Ingresar</ThemedText>
                    <ThemedText style={{ color: 'grey' }}>Por favor ingrese para continuar</ThemedText>
                </View>

                <View style={{ marginTop: 20 }}>
                    <ThemedTextInput
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        icon='mail-outline'
                    />
                    <ThemedTextInput
                        placeholder='Contraseña'
                        secureTextEntry
                        autoCapitalize='none'
                        icon='lock-closed-outline'
                    />
                </View>

                <View style={{marginTop: 10}}/>

                {/* Botón */}

                <ThemedButton
                    onPress={() => { }}
                    icon='arrow-forward-outline'
                >Ingresar</ThemedButton>

                {/* Enlace a registro */}

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <ThemedText>¿No tienes cuenta?</ThemedText>
                    {/* <ThemeLink></ThemeLink> */}
                </View>
                
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen