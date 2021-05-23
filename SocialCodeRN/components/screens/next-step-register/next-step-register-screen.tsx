import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import NameField from '../../base/name-field-input';
import AsyncStorage from '@react-native-community/async-storage';
import { authService } from '../../../services';
import AliasField from '../../base/alias-field-input';
import { styles } from './next-step-register-screen.styles';
import { ArrowRight } from 'react-native-feather';
type FormInputs = {
    name: string;
    surname: string;
    alias: string;
};

interface NextStepProps {
    route: any;
    navigation: any;
}

const NextStep = (props: NextStepProps) => {
    const { navigation, route } = props;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({ mode: 'onChange' });

    const onSubmit = (data: FormInputs) => {
        data = { ...route.params.data, ...data };
        authService.setAuthData(data, AsyncStorage);
        //navigation.popToTop();
    };

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.text}>Name</Text>
                <NameField
                    name={'name'}
                    errors={errors}
                    control={control}
                    placeholder={'Name'}
                    required={true}
                    maxLength={14}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.text}>Surname</Text>
                <NameField
                    name={'surname'}
                    errors={errors}
                    control={control}
                    placeholder={'Surname'}
                    required={false}
                    maxLength={20}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.text}>Alias</Text>
                <AliasField
                    name={'alias'}
                    errors={errors}
                    control={control}
                    placeholder={'@alias'}
                    required={true}
                    maxLength={15}
                />
            </View>
            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{'Sign up!'}</Text>
                    <ArrowRight stroke="#7752FF" width={50} height={50} />
                </View>
            </TouchableOpacity>
        </View>
    );
};
/*            authService.setAuthData(AsyncStorage, data);
            navigation.popToTop(); */
export default NextStep;
