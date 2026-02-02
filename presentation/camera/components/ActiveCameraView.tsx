import { Ionicons } from '@expo/vector-icons';
import { CameraType, CameraView } from 'expo-camera';
import { useWindowDimensions, View } from 'react-native';

import { cameraScreenStyles } from '../styles/cameraStyles';
import CameraButton from './buttons/CameraButton';


interface Props {
    cameraRef: React.RefObject<CameraView | null>;
    facing: CameraType;
    onShutter: () => Promise<void>;
    onToggleFacing: () => void;
    onPickFromGallery: () => Promise<void>;
    onCancel: () => void;
}

const ActiveCameraView = ({
    cameraRef,
    facing,
    onShutter,
    onToggleFacing,
    onPickFromGallery,
    onCancel,
}: Props) => {
    const dimensions = useWindowDimensions();

    const buttons = [
        {
            key: 'shutter',
            onPress: onShutter,
            size: 'large' as const,
            variant: 'transparent' as const,
            position: { bottom: 30, left: dimensions.width / 2 - 32 },
            borderColor: 'white',
            icon: null as React.ReactNode,
        },
        {
            key: 'flip',
            onPress: onToggleFacing,
            size: 'small' as const,
            variant: 'dark' as const,
            position: { bottom: 40, right: 32 },
            borderColor: undefined,
            icon: <Ionicons name="camera-reverse-outline" size={30} color="white" />,
        },
        {
            key: 'gallery',
            onPress: onPickFromGallery,
            size: 'small' as const,
            variant: 'dark' as const,
            position: { bottom: 40, left: 32 },
            borderColor: undefined,
            icon: <Ionicons name="images-outline" size={30} color="white" />,
        },
        {
            key: 'cancel',
            onPress: onCancel,
            size: 'small' as const,
            variant: 'dark' as const,
            position: { top: 40, left: 32 },
            borderColor: undefined,
            icon: <Ionicons name="arrow-back-outline" size={30} color="white" />,
        },
    ];

    return (
        <View style={cameraScreenStyles.container}>
            <CameraView style={cameraScreenStyles.camera} facing={facing} ref={cameraRef} />

            {buttons.map(({ key, onPress, size, variant, position, borderColor, icon }) => (
                <CameraButton
                    key={key}
                    onPress={onPress}
                    size={size}
                    variant={variant}
                    position={position}
                    borderColor={borderColor}
                >
                    {icon}
                </CameraButton>
            ))}
        </View>
    );
};

export default ActiveCameraView;
