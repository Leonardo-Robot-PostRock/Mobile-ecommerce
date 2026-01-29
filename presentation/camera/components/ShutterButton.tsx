import { TouchableOpacityProps, useWindowDimensions } from 'react-native';

import CameraButton from './CameraButton';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const ShutterButton = ({ onPress }: Props) => {

    const dimensions = useWindowDimensions()

    return (
        <CameraButton onPress={onPress} size="large" variant="transparent" position={{ bottom: 30, left: (dimensions.width / 2) - 32 }} borderColor={'white'}>
        </CameraButton>
    )
}

export default ShutterButton;