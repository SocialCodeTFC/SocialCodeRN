import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../../styles';

export const styles = StyleSheet.create({
    button: {
        ...styleTokens.backgroundColor.mainViolet,
        width: 50,
        height: 50,
        borderRadius: 50,
        opacity: 1,
        margin: 10,
        textAlign: 'center',
    },
});
