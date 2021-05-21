import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../../../styles';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        textAlign: 'center',
    },
    tabs: {
        backgroundColor: 'white',
        width: '33%',
    },
    tabsOnFocus: {
        backgroundColor: 'white',
        borderBottomColor: '#7752ff',
        borderBottomWidth: 1,
    },
});
