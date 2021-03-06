import { StyleSheet } from 'react-native';
import { styleTokens, textStylesEM } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    ...styleTokens.backgroundColor.mainViolet,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: '20%',
  },
  fieldContainer: {
    width: '80%',
  },
  headerTitleStyle: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.large,
    ...styleTokens.fontColor.white,
    borderBottomColor: styleTokens.colors.white,
    flex: 1,
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: '10%',
    marginTop: '10%',
    width: '80%',
  },
  headerTitleStyleWithArrow: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.large,
    ...styleTokens.fontColor.white,
    borderBottomColor: styleTokens.colors.white,
    borderBottomWidth: 1,
    padding: 10,
    marginRight: '10%',
    marginTop: '10%',
    width: '83%',
  },
  backButton: {
    height: '60%',
    position: 'absolute',
    bottom: 0,
    paddingLeft: '20%',
  },
  text: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.default,
    ...styleTokens.fontColor.white,
    width: '60%',
    marginHorizontal: '5%',
  },
  button: {
    ...styleTokens.backgroundColor.white,
    borderColor: styleTokens.colors.lightGray,
    width: 150,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    opacity: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    marginLeft: '40%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.xl,
    ...styleTokens.fontColor.mainViolet,
  },
  link: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.xs,
    ...styleTokens.fontColor.white,
    textAlign: 'center',
    marginTop: '10%',
    width: '60%',
  },
  errorText: {
    ...textStylesEM.font.regular,
    ...textStylesEM.size.small,
    ...styleTokens.fontColor.orange,
    width: '60%',
    marginHorizontal: '5%',
    marginBottom: 10,
    textAlign: 'center',
  },
});
