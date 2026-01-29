import buttonStyles from '@/presentation/camera/styles/buttonStyles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const GaleryButton = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyles.baseSmall, buttonStyles.darkButton, { position: 'absolute', bottom: 40, left: 32 }]}>            
            <Ionicons name="images-outline" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default GaleryButton;