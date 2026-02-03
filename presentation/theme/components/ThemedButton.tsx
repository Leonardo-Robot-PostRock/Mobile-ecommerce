import { Ionicons } from '@expo/vector-icons';

import { ActivityIndicator, Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';


interface Props extends PressableProps {
    icon?: keyof typeof Ionicons.glyphMap;
    children: string;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
}

const ThemedButton = ({ children, icon, style, disabled, ...rest }: Props) => {
    const primaryColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            {...rest}
            disabled={disabled}
            style={({ pressed }) => [
                {
                    backgroundColor: disabled
                        ? primaryColor + '55'
                        : pressed
                            ? primaryColor + '90'
                            : primaryColor,
                },
                styles.button,
                disabled && styles.disabledButton,
                style,
            ]}
        >
            {disabled && (
                <ActivityIndicator
                    size="small"
                    color="white"
                    style={{ marginRight: 8 }}
                />
            )}
            <Text style={{ color: 'white', opacity: disabled ? 0.7 : 1 }}>{children}</Text>

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
        paddingVertical: 15,
    },
    disabledButton: {
        opacity: 0.8,
    },
})
