import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../../styles';

export const styles = StyleSheet.create({
  container: {
    ...styleTokens.backgroundColor.white,
    width: '100%',
    flexDirection: 'row',
  },
  tabs: {
    ...styleTokens.backgroundColor.white,
    justifyContent: 'center',
    width: '33.3%',
    height: 40,
  },
  tabsOnFocus: {
    ...styleTokens.backgroundColor.white,
    borderBottomColor: styleTokens.colors.mainViolet,
    justifyContent: 'center',
    borderBottomWidth: 1,
    width: '33.3%',
    height: 40,
  },
  text: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    ...styleTokens.fontColor.dark,
    textAlign: 'center',
  },
});
