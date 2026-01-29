import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const RetakeImageButton = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.retakeImageButton}>
            <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default RetakeImageButton;

const styles = StyleSheet.create({
    retakeImageButton: {
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
})