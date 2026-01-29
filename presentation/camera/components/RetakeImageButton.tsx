import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import CameraButton from '@/presentation/camera/components/CameraButton';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const RetakeImageButton = ({ onPress }: Props) => {
    return (
        <CameraButton onPress={onPress} size="small" variant="dark" position={{ bottom: 40, right: 32 }}>
            <Ionicons name="close-outline" size={30} color="white" />
        </CameraButton>
    );
}

export default RetakeImageButton;