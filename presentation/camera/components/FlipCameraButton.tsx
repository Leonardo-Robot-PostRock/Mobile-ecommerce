import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import CameraButton from './CameraButton';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const FlipCameraButton = ({ onPress }: Props) => {
    return (
        <CameraButton onPress={onPress} size="small" variant="dark" position={{ bottom: 40, right: 32 }}>
            <Ionicons name="camera-reverse-outline" size={30} color="white" />
        </CameraButton>
    );
}

export default FlipCameraButton;