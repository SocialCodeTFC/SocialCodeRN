import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    input: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        borderColor: styleTokens.colors.black,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 12,
        textAlignVertical: 'top',
        height: '80%',
        width: 'auto',
    },
});
