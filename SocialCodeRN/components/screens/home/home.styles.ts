import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
    containerButton: {
        width: '100%',
        position: 'absolute',
        bottom: '10%',
        left: '75%',
    },
    container: {
        ...styleTokens.backgroundColor.white,
        width: '100%',
        height: '100%',
    },
});
