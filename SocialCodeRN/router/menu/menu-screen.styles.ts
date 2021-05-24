import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../styles';

export const styles = StyleSheet.create({
    buttonMenu: {
        margin: 10,
    },
    header: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.large,
        color: '#ffffff',
    },
    backButton: {
        paddingLeft: '20%',
    },
});
