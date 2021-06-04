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
  error: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    ...styleTokens.backgroundColor.white,
    borderColor: styleTokens.colors.orange,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 12,
  },
  errorMsg: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
    ...styleTokens.fontColor.orange,
    textAlign: 'right',
  },
});
