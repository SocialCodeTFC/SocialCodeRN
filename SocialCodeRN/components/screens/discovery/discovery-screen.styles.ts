import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    ...styleTokens.backgroundColor.white,
    flex: 1,
  },
  safeContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    ...styleTokens.backgroundColor.white,
    borderRadius: 60,
  },
  tagsContainer: {
    flexDirection: 'row',
    ...styleTokens.backgroundColor.mainViolet,
    padding: 10,
    marginVertical: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 60,
    borderRadius: 50,
  },
  text: {
    ...styleTokens.fontColor.white,
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
  },
  subtitle: {
    ...textStylesEM.size.default,
    ...textStylesEM.font.regular,
    ...styleTokens.fontColor.dark,
  },
  tagSubtitleContainer: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  header: {
    ...styleTokens.backgroundColor.mainViolet,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: styleTokens.colors.black,
  },
  emptyList: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
    textAlign: 'center',
  },
});
