import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    input: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 12,
        backgroundColor: 'white',
    },
    error: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        borderColor: 'orange',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 12,
        backgroundColor: 'white',
    },
});
