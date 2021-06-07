import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    ...styleTokens.backgroundColor.white,
    borderColor: styleTokens.colors.black,
    flexDirection: 'row',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  input: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    padding: 12,
    flex: 1,
  },
  error: {
    ...styleTokens.backgroundColor.white,
    borderColor: styleTokens.colors.orange,
    flexDirection: 'row',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  eye: {
    alignSelf: 'center',
    marginRight: 10,
  },
  errorMsg: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
    ...styleTokens.fontColor.orange,
    textAlign: 'right',
  },
});
