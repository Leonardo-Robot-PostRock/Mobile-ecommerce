import { Ionicons } from '@expo/vector-icons';
import { Image, useWindowDimensions, View } from 'react-native';

import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import CameraButton from '../components/CameraButton';
import { cameraScreenStyles } from '../styles/cameraStyles';

interface Props {
    selectedImage: string;
    onAccept: () => Promise<void>;
    onRetake: () => void;
    onCancel: () => void;
}

const SelectedImagePreview = ({ selectedImage, onAccept, onRetake, onCancel }: Props) => {
    const dimensions = useWindowDimensions();
    const primary = useThemeColor({}, 'primary');

    const buttons = [
        {
            key: 'confirm',
            onPress: onAccept,
            size: 'large' as const,
            variant: 'transparent' as const,
            position: { bottom: 30, left: dimensions.width / 2 - 32 },
            borderColor: primary,
            icon: <Ionicons name="checkmark-outline" size={30} color={primary} />,
        },
        {
            key: 'retake',
            onPress: onRetake,
            size: 'small' as const,
            variant: 'dark' as const,
            position: { bottom: 40, right: 32 },
            borderColor: undefined,
            icon: <Ionicons name="close-outline" size={30} color="white" />,
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
            <Image source={{ uri: selectedImage }} style={cameraScreenStyles.camera} />
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

export default SelectedImagePreview;
