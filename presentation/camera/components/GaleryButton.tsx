import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    onPress: () => void;
}

const GaleryButton = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.galleryButton}>
            <Ionicons name="images-outline" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default GaleryButton;

const styles = StyleSheet.create({
    galleryButton: {
        width: 50,
        height: 50,
        borderRadius: 32,
        backgroundColor: '#17202A',
        position: 'absolute',
        bottom: 40,
        left: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
})