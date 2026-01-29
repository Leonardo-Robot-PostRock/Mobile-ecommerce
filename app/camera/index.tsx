import { ConfirmImageButton, FlipCameraButton, GaleryButton, RetakeImageButton, ReturnCancelButton, ShutterButton } from '@/presentation/camera';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CameraScreen = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const cameraRef = useRef<CameraView>(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View
                style={{
                    ...styles.container,
                    marginHorizontal: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.message}>Necesitamos permiso para usar la cámara y la galería</Text>

                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <ThemedText type='subtitle'>
                        Solicitar permiso
                    </ThemedText>
                </TouchableOpacity>
            </View>
        );
    }

    const onShutterButtonPress = async () => {
        if (!cameraRef.current) return;

        const picture = await cameraRef.current.takePictureAsync({
            quality: 0.7
        });

        if (!picture.uri) return;

        setSelectedImage(picture.uri);
    }


    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const onReturnCancel = () => {
        router.dismiss();
    }

    const onPictureAccepted = () => {

    }

    if (selectedImage) {

        return (
            <View style={styles.container}>
                <Image source={{ uri: selectedImage }} style={styles.camera} />
                <ConfirmImageButton onPress={onPictureAccepted} />
                <RetakeImageButton />
                <ReturnCancelButton onPress={onReturnCancel} />
            </View>
        )


    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={cameraRef} />
            <ShutterButton onPress={onShutterButtonPress} />
            <FlipCameraButton onPress={toggleCameraFacing} />
            <GaleryButton onPress={() => { }} />
            <ReturnCancelButton onPress={onReturnCancel} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
export default CameraScreen;