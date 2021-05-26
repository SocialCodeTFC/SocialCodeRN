import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    input: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
        ...styleTokens.backgroundColor.white,
        borderColor: styleTokens.colors.black,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 12,
    },
    tags: {
        flexDirection: 'row',
    },
    textTags: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.xs,
        backgroundColor: 'rgba(0, 187, 255, 0.2)',
        borderRadius: 50,
        padding: 8,
    },
    tagsContainer: {
        flexDirection: 'row',
    },
    deleteButton: {
        padding: 2,
        borderRadius: 50,
        height: 15,
        width: 15,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
