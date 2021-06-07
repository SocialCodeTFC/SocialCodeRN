import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    ...styleTokens.backgroundColor.white,
    height: '100%',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    ...styleTokens.fontColor.dark,
  },
  button: {
    ...styleTokens.backgroundColor.mainViolet,
    width: 150,
    height: 50,
    borderRadius: 50,
    opacity: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: '20%',
    left: '60%',
  },

  contentButton: {
    flexDirection: 'row',
  },
  nextButton: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.xl,
    ...styleTokens.fontColor.white,
  },
  inputContainer: {
    width: '90%',
  },
});
