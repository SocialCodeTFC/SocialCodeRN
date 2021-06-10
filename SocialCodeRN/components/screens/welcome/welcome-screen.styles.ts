import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    ...styleTokens.backgroundColor.mainViolet,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...textStylesEM.font.bold,
    ...textStylesEM.size.title,
    ...styleTokens.fontColor.white,
    width: '100%',
    textAlign: 'center',
  },
  text: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
    color: 'white',
    width: '60%',
    textAlign: 'center',
    marginVertical: '25%',
  },
  button: {
    ...styleTokens.backgroundColor.white,
    borderColor: '#B3B3B3',
    borderWidth: 3,
    borderRadius: 50,
    width: '65%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...textStylesEM.font.bold,
    ...textStylesEM.size.default,
    color: '#7752FF',
  },
});
