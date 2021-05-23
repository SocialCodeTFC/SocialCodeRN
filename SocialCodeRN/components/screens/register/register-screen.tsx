import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'react-native-feather';
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
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.text}>Email</Text>
                <EmailField
                    name={'email'}
                    errors={errors}
                    control={control}
                    placeholder={'Email'}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.text}>Password</Text>
                <PasswordField
                    name={'password'}
                    errors={errors}
                    control={control}
                    placeholder={'Password'}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.text}>Repeat password</Text>
                <PasswordField
                    name={'repeatPassword'}
                    errors={errors}
                    control={control}
                    placeholder={'Repeat the password'}
                    dontMatch={dontMatch}
                />
            </View>

            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{'  Next!  '}</Text>
                    <ArrowRight stroke="#7752FF" width={50} height={50} />
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default Register;
