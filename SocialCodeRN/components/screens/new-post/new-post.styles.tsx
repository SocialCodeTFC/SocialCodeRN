import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    text: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        color: 'gray',
    },
    button: {
        width: 120,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#7752ff',
        opacity: 1,
        margin: 10,
        textAlign: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: '60%',
    },
    contentButton: {
        flexDirection: 'row',
        textAlign: 'center',
    },
    nextButton: {
        color: 'white',
        ...textStylesEM.font.regular,
        ...textStylesEM.size.xl,
    },
});
