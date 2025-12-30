import { LOGIN_INPUTS } from '@/constants/auth';
import AuthForm from '@/presentation/auth/components/AuthForm';

const LoginScreen = () => {
    return (
        <AuthForm
            title='Ingresar'
            subtitle='Por favor ingrese para continuar'
            inputs={LOGIN_INPUTS}
            buttonText='Ingresar'
            onButtonPress={() => { }}
            linkText='¿No tienes cuenta?'
            linkLabel='Crear cuenta'
            linkHref='/auth/register'
        />
    );
};

export default LoginScreen;