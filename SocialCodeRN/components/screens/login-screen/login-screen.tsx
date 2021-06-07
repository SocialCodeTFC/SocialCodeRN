import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { authService } from '../../../services';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Register from '../register';
import NextStep from '../next-step-register';
import AliasField from '../../base/alias-field-input';
import PasswordField from '../../base/password-field';
import { styles } from './login-screen.styles';
import { ArrowRight, ArrowLeft } from 'react-native-feather';
import { styleTokens } from '../../../styles';

type FormInputs = {
  password: string;
  alias: string;
};

const LoginScreen = ({ navigation }) => {
  const [errorResponse, setErrorResponse] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onChange' });
  const onSubmit = (data: FormInputs) => {
    authService.getAuthData(data, AsyncStorage).then(response => {
      if (response === 200) {
        navigation.replace('Home', { username: data.alias });
      } else {
        setErrorResponse(true);
      }
    });
  };
  return (
    <View style={styles.container}>
      {errorResponse && (
        <Text style={styles.errorText}>
          {'There was an error, please, try again'}
        </Text>
      )}
      <View style={styles.fieldContainer}>
        <Text style={styles.text}>{'Alias'}</Text>
        <AliasField
          name={'alias'}
          errors={errors}
          control={control}
          placeholder={'@alias'}
          required={true}
          maxLength={15}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.text}>{'Password'}</Text>
        <PasswordField
          name={'password'}
          errors={errors}
          control={control}
          placeholder={'Password'}
        />
      </View>
      <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
        {'You do not have an account?\n\n Sign up!'}
      </Text>
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{'Sign in!'}</Text>
          <ArrowRight
            stroke={styleTokens.colors.mainViolet}
            width={50}
            height={50}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Login = createStackNavigator();
const LoginNavigator = ({ navigation }) => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Login.Navigator mode="modal">
      <Login.Screen
        name="Sign in"
        component={LoginScreen}
        options={{
          cardStyleInterpolator: forFade,
          headerStyle: {
            ...styleTokens.backgroundColor.mainViolet,
            shadowColor: 'transparent',
          },
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Login.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: 'Sign up',
          cardStyleInterpolator: forFade,
          headerStyle: {
            ...styleTokens.backgroundColor.mainViolet,
            shadowColor: 'transparent',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={styles.backButton}
            >
              <ArrowLeft
                stroke={styleTokens.colors.white}
                width={40}
                height={40}
              />
            </TouchableOpacity>
          ),

          headerTitleStyle: styles.headerTitleStyleWithArrow,
        }}
      />
      <Login.Screen
        name="NextStep"
        options={{
          headerTitle: 'Sign up',
          cardStyleInterpolator: forFade,
          headerStyle: {
            ...styleTokens.backgroundColor.mainViolet,
            shadowColor: 'transparent',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={styles.backButton}
            >
              <ArrowLeft
                stroke={styleTokens.colors.white}
                width={40}
                height={40}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: styles.headerTitleStyleWithArrow,
        }}
        component={NextStep}
      />
    </Login.Navigator>
  );
};

export default LoginNavigator;
