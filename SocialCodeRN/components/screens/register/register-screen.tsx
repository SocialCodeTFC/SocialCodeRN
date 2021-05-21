import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, View } from 'react-native';
import EmailField from '../../base/email-field-input';
import PasswordField from '../../base/password-field/';
import { styles } from './register-screen.styles';

type FormInputs = {
    email: string;
    password: string;
    repeatPassword: string;
};

const Register = ({ navigation }) => {
    const [dontMatch, setDontMatch] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({ mode: 'onChange' });
    const onSubmit = (data: FormInputs) => {
        if (data.password === data.repeatPassword) {
            navigation.navigate('NextStep', { data });
        } else {
            setDontMatch(true);
        }
    };

    return (
        <View>
            <View>
                <EmailField
                    name={'email'}
                    errors={errors}
                    control={control}
                    placeholder={'Email'}
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
            <View>
                <PasswordField
                    name={'repeatPassword'}
                    errors={errors}
                    control={control}
                    placeholder={'Repeat the password'}
                    dontMatch={dontMatch}
                />
            </View>

            <Button title="Continue" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};
export default Register;
