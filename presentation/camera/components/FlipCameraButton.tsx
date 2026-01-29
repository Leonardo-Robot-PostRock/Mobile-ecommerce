import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    onPress: () => void;
}

const FlipCameraButton = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.flipCameraButton}>
            <Ionicons name="camera-reverse-outline" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default FlipCameraButton;

const styles = StyleSheet.create({
    flipCameraButton: {
        width: 50,
        height: 50,
        borderRadius: 32,
        backgroundColor: '#17202A',
        position: 'absolute',
        bottom: 40,
        right: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
});