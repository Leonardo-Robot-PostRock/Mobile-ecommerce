import buttonStyles from '@/presentation/camera/styles/buttonStyles';
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

type Position = { top?: number; bottom?: number; left?: number; right?: number };

interface Props {
    onPress?: TouchableOpacityProps['onPress'];
    size?: 'small' | 'large';
    variant?: 'dark' | 'transparent';
    position?: Position;
    borderColor?: string;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const CameraButton = ({ onPress, size = 'small', variant = 'dark', position = {}, borderColor, children, style }: Props) => {
    const base = size === 'large' ? buttonStyles.baseLarge : buttonStyles.baseSmall;
    const variantStyle = variant === 'dark' ? buttonStyles.darkButton : buttonStyles.transparentBorder;
    const posStyle = { position: 'absolute', ...(position || {}) } as ViewStyle;
    const borderColorStyle = borderColor ? { borderColor } as ViewStyle : undefined;

    return (
        <TouchableOpacity onPress={onPress} style={[base, variantStyle, posStyle, borderColorStyle, style]}>
            {children}
        </TouchableOpacity>
    );
};

export default CameraButton;
