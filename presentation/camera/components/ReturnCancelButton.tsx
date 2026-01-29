import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const ReturnCancelButton = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.returnCancelButton}>
            <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default ReturnCancelButton;

const styles = StyleSheet.create({
    returnCancelButton: {
        width: 50,
        height: 50,
        borderRadius: 32,
        backgroundColor: '#17202A',
        position: 'absolute',
        top: 40,
        left: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
})