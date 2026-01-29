import { StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';

interface Props {
    onPress: () => void;
}

const ShutterButton = ({ onPress }: Props) => {

    const dimensions = useWindowDimensions()

    return (
        <TouchableOpacity onPress={onPress}

            style={[
                styles.shutterButton,
                {
                    position: 'absolute',
                    bottom: 30,
                    borderColor: 'white',
                    left: (dimensions.width / 2) - 32,
                }
            ]}
        >
        </TouchableOpacity>
    )
}

export default ShutterButton;

const styles = StyleSheet.create({

    shutterButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'transparent',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});