import { StyleSheet } from 'react-native';

export const BUTTON_SIZES = {
    small: 50,
    large: 64,
};

export default StyleSheet.create({
    baseSmall: {
        width: BUTTON_SIZES.small,
        height: BUTTON_SIZES.small,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    baseLarge: {
        width: BUTTON_SIZES.large,
        height: BUTTON_SIZES.large,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    darkButton: {
        backgroundColor: '#17202A',
    },
    transparentBorder: {
        backgroundColor: 'transparent',
        borderWidth: 4,
    },
});
