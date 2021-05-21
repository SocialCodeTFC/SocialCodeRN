import React from 'react';
import { View, Text, Button } from 'react-native';
import { useForm } from 'react-hook-form';
import NameField from '../../base/name-field-input';
import AsyncStorage from '@react-native-community/async-storage';
import { authService } from '../../../services';
import AliasField from '../../base/alias-field-input';

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
        <View>
            <View>
                <NameField
                    name={'name'}
                    errors={errors}
                    control={control}
                    placeholder={'Name'}
                    required={true}
                    maxLength={14}
                />
            </View>
            <View>
                <NameField
                    name={'surname'}
                    errors={errors}
                    control={control}
                    placeholder={'Surname'}
                    required={false}
                    maxLength={20}
                />
            </View>
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
            <Button title="Sign up!" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};
/*            authService.setAuthData(AsyncStorage, data);
            navigation.popToTop(); */
export default NextStep;
