import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../../../styles';

export const styles = StyleSheet.create({
    containerCol: {
        flexDirection: 'column',
        width: '100%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
    },
    text: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.large,
        color: 'black',
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'pink',
        margin: 10,
    },
    alias: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        color: 'gray',
        margin: 10,
    },
});
