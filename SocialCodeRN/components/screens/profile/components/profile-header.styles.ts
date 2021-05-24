import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../../styles';

export const styles = StyleSheet.create({
    containerCol: {
        ...styleTokens.backgroundColor.white,
        borderBottomColor: styleTokens.colors.darkGray,
        flexDirection: 'column',
        width: '100%',
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
        ...styleTokens.fontColor.black,
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
        ...styleTokens.fontColor.darkGray,
        margin: 10,
    },
});
