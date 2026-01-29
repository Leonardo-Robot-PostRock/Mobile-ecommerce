import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import CameraButton from './CameraButton';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const GaleryButton = ({ onPress }: Props) => {
    return (
        <CameraButton onPress={onPress} size="small" variant="dark" position={{ bottom: 40, left: 32 }}>
            <Ionicons name="images-outline" size={30} color="white" />
        </CameraButton>
    );
}

export default GaleryButton;