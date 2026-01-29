import buttonStyles from '@/presentation/camera/styles/buttonStyles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props {
    onPress: TouchableOpacityProps['onPress'];
}

const RetakeImageButton = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyles.baseSmall, buttonStyles.darkButton, { position: 'absolute', bottom: 40, right: 32 }]}>            
            <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default RetakeImageButton;