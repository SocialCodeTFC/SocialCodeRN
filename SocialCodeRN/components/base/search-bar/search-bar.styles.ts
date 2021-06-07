import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  text: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    ...styleTokens.fontColor.dark,
  },
});
