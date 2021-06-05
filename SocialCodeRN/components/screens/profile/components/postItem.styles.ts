import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../../styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    borderBottomColor: styleTokens.colors.mainViolet,
    borderBottomWidth: 1,
  },
  title: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    ...styleTokens.fontColor.black,
    marginBottom: 4,
  },
});
