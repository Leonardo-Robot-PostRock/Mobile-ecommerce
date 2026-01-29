import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacityProps, useWindowDimensions } from 'react-native';

import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import CameraButton from './CameraButton';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const ConfirmImageButton = ({ onPress }: Props) => {

    const dimensions = useWindowDimensions();
    const primary = useThemeColor({}, 'primary');

    return (
        <CameraButton onPress={onPress} size="large" variant="transparent" position={{ bottom: 30, left: (dimensions.width / 2) - 32 }} borderColor={primary}>
            <Ionicons name="checkmark-outline" size={30} color={primary} />
        </CameraButton>
    )
}

export default ConfirmImageButton;