import { Ionicons } from '@expo/vector-icons';

import { Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';


interface Props extends PressableProps {
    icon?: keyof typeof Ionicons.glyphMap,
    children: string,
    style?: StyleProp<ViewStyle>
}

const ThemedButton = ({ children, icon, style, ...rest }: Props) => {
    const primaryColor = useThemeColor({}, 'primary');

    return (
        <Pressable {...rest} style={({ pressed }) => [
            { backgroundColor: pressed ? primaryColor + '90' : primaryColor },
            styles.button,
            style
        ]}>
            <Text style={{ color: 'white' }}>{children}</Text>

            {icon && (
                <Ionicons
                    name={icon}
                    size={24}
                    color='white'
                    style={{ marginHorizontal: 5 }}
                />
            )}
        </Pressable>
    )
}


export default ThemedButton

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15
    }
})
