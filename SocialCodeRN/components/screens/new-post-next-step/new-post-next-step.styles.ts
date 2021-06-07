import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    ...styleTokens.backgroundColor.white,
    padding: 10,
    alignItems: 'center',
    flex: 1,
  },
  input: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    borderColor: styleTokens.colors.black,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 12,
    textAlignVertical: 'top',
    height: '80%',
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
  buttonText: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.xl,
    ...styleTokens.fontColor.white,
  },
  inputContainer: {
    width: '90%',
  },
});
