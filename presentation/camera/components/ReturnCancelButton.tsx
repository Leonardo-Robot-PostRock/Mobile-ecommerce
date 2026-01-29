import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import CameraButton from './CameraButton';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const ReturnCancelButton = ({ onPress }: Props) => {
    return (
        <CameraButton onPress={onPress} size="small" variant="dark" position={{ top: 40, left: 32 }}>
            <Ionicons name="arrow-back-outline" size={30} color="white" />
        </CameraButton>
    )
}

export default ReturnCancelButton;