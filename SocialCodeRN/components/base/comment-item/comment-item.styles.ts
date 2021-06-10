import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  comments: {
    borderBottomColor: styleTokens.colors.mainViolet,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 5,
  },
  userAlias: {
    ...styleTokens.fontColor.dark,
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
  },
  commentText: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.xs,
    marginVertical: 5,
    marginLeft: 10,
  },
  commentDate: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
    ...styleTokens.fontColor.darkGray,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
