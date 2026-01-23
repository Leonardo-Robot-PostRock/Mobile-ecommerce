import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import React from 'react';
import { View } from 'react-native';

const HomeScreen = () => {
    const primary = useThemeColor({}, 'primary')

    return (
        <View style={{  paddingHorizontal: 10 }}>
            
        </View>
    )
}

export default HomeScreen