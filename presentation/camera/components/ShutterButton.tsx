import buttonStyles from '@/presentation/camera/styles/buttonStyles';
import { TouchableOpacity, TouchableOpacityProps, useWindowDimensions } from 'react-native';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const ShutterButton = ({ onPress }: Props) => {

    const dimensions = useWindowDimensions()

    return (
        <TouchableOpacity onPress={onPress}

            style={[
                buttonStyles.baseLarge,
                buttonStyles.transparentBorder,
                {
                    position: 'absolute',
                    bottom: 30,
                    borderColor: 'white',
                    left: (dimensions.width / 2) - 32,
                }
            ]}
        >
        </TouchableOpacity>
    )
}

export default ShutterButton;