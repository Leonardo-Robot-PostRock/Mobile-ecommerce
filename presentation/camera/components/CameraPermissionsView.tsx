import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/presentation/theme/components/ThemedText';

interface Props {
    onRequestPermissions: () => Promise<void>;
}

const CameraPermissionsView = ({ onRequestPermissions }: Props) => {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.message}>Necesitamos permiso para usar la cámara y la galería</Text>

            <TouchableOpacity onPress={onRequestPermissions}>
                <ThemedText type="subtitle">Solicitar permiso</ThemedText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        marginBottom: 0,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
});

export default CameraPermissionsView;
