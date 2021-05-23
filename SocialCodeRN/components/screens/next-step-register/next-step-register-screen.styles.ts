import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7752FF',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: '20%',
    },
    fieldContainer: {
        width: '80%',
    },
    text: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        color: 'white',
        width: '60%',
        marginHorizontal: '5%',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 50,
        borderColor: '#B3B3B3',
        borderWidth: 2,
        backgroundColor: 'white',
        opacity: 1,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginLeft: '40%',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonText: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.xl,
        color: '#7752FF',
    },
    link: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.xs,
        color: 'white',
        textAlign: 'center',
        marginTop: '10%',
        width: '60%',
    },
});
