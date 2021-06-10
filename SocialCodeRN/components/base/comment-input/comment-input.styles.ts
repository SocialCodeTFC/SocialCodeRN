import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  comment: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    ...styleTokens.backgroundColor.white,
    paddingRight: 50,
  },
});
