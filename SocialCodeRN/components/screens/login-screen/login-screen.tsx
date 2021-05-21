import React from 'react';
import { View, Text, Button } from 'react-native';
import { useForm } from 'react-hook-form';
import { authService } from '../../../services';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Register from '../register';
import NextStep from '../next-step-register';
import AliasField from '../../base/alias-field-input';
import PasswordField from '../../base/password-field';

type FormInputs = {
    password: string;
    alias: string;
};
const LoginScreen = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({ mode: 'onChange' });
    const onSubmit = (data: FormInputs) => {
        authService.getAuthData(data, AsyncStorage);
        navigation.navigate('Home');
    };
    return (
        <View>
            <View>
                <AliasField
                    name={'alias'}
                    errors={errors}
                    control={control}
                    placeholder={'@alias'}
                    required={true}
                    maxLength={15}
                />
            </View>
            <View>
                <PasswordField
                    name={'password'}
                    errors={errors}
                    control={control}
                    placeholder={'Password'}
                />
            </View>
            <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
            <Text onPress={() => navigation.navigate('Register')}>
                You do not have an account? Sign up!
            </Text>
        </View>
    );
};
const Login = createStackNavigator();
const LoginNavigator = () => {
    return (
        <Login.Navigator>
            <Login.Screen name="login" component={LoginScreen} />
            <Login.Screen name="Register" component={Register} />
            <Login.Screen
                name="NextStep"
                options={{ headerTitle: 'Register' }}
                component={NextStep}
            />
        </Login.Navigator>
    );
};

export default LoginNavigator;
