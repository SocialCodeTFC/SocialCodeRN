import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        ...styleTokens.backgroundColor.mainViolet,
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
        ...styleTokens.fontColor.white,
        width: '60%',
        marginHorizontal: '5%',
    },
    button: {
        ...styleTokens.backgroundColor.white,
        borderColor: styleTokens.colors.lightGray,
        width: 150,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
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
        ...styleTokens.fontColor.mainViolet,
    },
    link: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.xs,
        ...styleTokens.fontColor.white,
        textAlign: 'center',
        marginTop: '10%',
        width: '60%',
    },
});
