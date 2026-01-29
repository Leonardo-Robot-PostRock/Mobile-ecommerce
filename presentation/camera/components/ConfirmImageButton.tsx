import buttonStyles from '@/presentation/camera/styles/buttonStyles';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps, useWindowDimensions } from 'react-native';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const ConfirmImageButton = ({ onPress }: Props) => {

    const dimensions = useWindowDimensions();
    const primary = useThemeColor({}, 'primary');

    return (
        <TouchableOpacity onPress={onPress}

            style={[
                buttonStyles.baseLarge,
                buttonStyles.transparentBorder,
                {
                    position: 'absolute',
                    bottom: 30,
                    borderColor: primary,
                    left: (dimensions.width / 2) - 32,
                }
            ]}
        >
            <Ionicons name="checkmark-outline" size={30} color={primary} />
        </TouchableOpacity>
    )
}

export default ConfirmImageButton;