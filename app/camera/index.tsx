import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

import { ActiveCameraView, CameraPermissionsView, SelectedImagePreview } from '@/presentation/camera';
import { MediaTypes } from '@/presentation/camera/constants/media-types';
import { useCameraStore } from '@/presentation/camera/store/useCameraStore';

const CameraScreen = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();

    const { addSelectedImage } = useCameraStore();

    const cameraRef = useRef<CameraView | null>(null);

    const onRequestPermissions = async () => {
        try {
            const { status: cameraPermissionStatus } = await requestCameraPermission();

            if (cameraPermissionStatus !== 'granted') {
                Alert.alert('Lo siento', 'Necesitamos permiso para usar la cámara.');
                return;
            }

            const { status: mediaPermissionStatus } = await requestMediaPermission();

            if (mediaPermissionStatus !== 'granted') {
                Alert.alert('Lo siento', 'Necesitamos permiso para acceder a la galería.');
                return;
            }
        } catch (error) {
            Alert.alert('Error', 'Hubo un error al solicitar los permisos.');
        }
    };

    const onShutterButtonPress = async () => {
        if (!cameraRef.current) return;

        const picture = await cameraRef.current.takePictureAsync({
            quality: 0.7,
        });

        if (!picture.uri) return;

        setSelectedImage(picture.uri);
    };

    const toggleCameraFacing = () => {
        setFacing((current) => (current === 'back' ? 'front' : 'back'));
    };

    const onPickImages = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: MediaTypes.Images,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true,
            selectionLimit: 5,
        });

        if (result.canceled) return;

        result.assets.forEach((asset) => {
            addSelectedImage(asset.uri);
        });

        router.dismiss();
    };

    const onReturnCancel = () => {
        router.dismiss();
    };

    const onPictureAccepted = async () => {
        if (!selectedImage) return;

        await MediaLibrary.createAssetAsync(selectedImage);

        addSelectedImage(selectedImage);

        router.dismiss();
    };

    const onRetakePhoto = () => {
        setSelectedImage(null);
    };

    if (!cameraPermission) {
        return <View />;
    }

    if (!cameraPermission.granted) {
        return <CameraPermissionsView onRequestPermissions={onRequestPermissions} />;
    }

    if (selectedImage) {
        return (
            <SelectedImagePreview
                selectedImage={selectedImage}
                onAccept={onPictureAccepted}
                onRetake={onRetakePhoto}
                onCancel={onReturnCancel}
            />
        );
    }

    return (
        <ActiveCameraView
            cameraRef={cameraRef}
            facing={facing}
            onShutter={onShutterButtonPress}
            onToggleFacing={toggleCameraFacing}
            onPickFromGallery={onPickImages}
            onCancel={onReturnCancel}
        />
    );
};

export default CameraScreen;