import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7752FF',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.title,
        color: 'white',
        width: '100%',
        textAlign: 'center',
    },
    text: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.small,
        color: 'white',
        width: '60%',
        textAlign: 'center',
        marginVertical: '25%',
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#B3B3B3',
        borderWidth: 3,
        borderRadius: 50,
        width: '65%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        color: '#7752FF',
    },
});
