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

  textTags: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.xs,
    backgroundColor: 'rgba(0, 187, 255, 0.2)',
    borderRadius: 50,
    padding: 4,
    marginHorizontal: 4,
  },
  tagsContainer: {
    marginVertical: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    ...styleTokens.backgroundColor.white,
    flex: 1,
    flexDirection: 'column',
  },
  postContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  title: {
    ...styleTokens.fontColor.dark,
    ...textStylesEM.font.regular,
    ...textStylesEM.size.large,
    textAlign: 'left',
  },
  headerContainer: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    ...styleTokens.fontColor.darkGray,
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
    position: 'absolute',
    right: 0,
  },
  user: {
    ...styleTokens.fontColor.darkGray,
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    marginRight: 8,
  },
  descriptionContainer: {
    marginVertical: 16,
  },
  text: {
    ...styleTokens.fontColor.dark,
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
  },
  codeContainer: {
    backgroundColor: 'rgba(225, 225, 225, 0.3)',
  },
  subtitle: {
    marginTop: 14,
    marginBottom: 5,
    ...styleTokens.fontColor.dark,
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
  },
  code: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
  },
});
