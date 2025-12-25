import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import React from 'react';
import { View } from 'react-native';

const HomeScreen = () => {
    const primary = useThemeColor({}, 'primary')

    return (
        <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
            <ThemedText style={{ color: primary, fontFamily: 'Kanit-Bold' }}>HomeScreen</ThemedText>
            <ThemedText style={{ fontFamily: 'Kanit-Regular' }}>HomeScreen</ThemedText>
            <ThemedText style={{ fontFamily: 'Kanit-Thin' }}>HomeScreen</ThemedText>
        </View>
    )
}

export default HomeScreen