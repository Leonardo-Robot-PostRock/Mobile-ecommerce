import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, useWindowDimensions } from 'react-native';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const ConfirmImageButton = ({ onPress }: Props) => {

    const dimensions = useWindowDimensions();
    const primary = useThemeColor({}, 'primary');

    return (
        <TouchableOpacity onPress={onPress}

            style={[
                styles.confirmImageButton,
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

const styles = StyleSheet.create({

    confirmImageButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'transparent',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});