import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    input: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        padding: 12,
        flex: 1,
    },
    error: {
        flexDirection: 'row',
        borderColor: 'orange',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    eye: {
        alignSelf: 'center',
        marginRight: 10,
    },
});
