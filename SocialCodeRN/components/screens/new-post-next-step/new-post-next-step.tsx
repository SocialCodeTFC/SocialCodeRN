import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useForm } from 'react-hook-form';
import BodyPost from '../../base/post-body-field';
import { styles } from './new-post-next-step.styles';
import AsyncStorage from '@react-native-community/async-storage';
import { postService } from '../../../services';
interface NewPostNextStepProps {
    navigation: any;
    route: any;
}
type FormInputs = {
    Code: string;
};
type UserData = {
    id: string;
    token: string;
};

const NewPostNextStep = (props: NewPostNextStepProps) => {
    const { navigation, route } = props;
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({ mode: 'onChange' });
    const onSubmit = async (data: FormInputs) => {
        let userData = JSON.parse(await AsyncStorage.getItem('userStorage'));
        let userAuth = userData as UserData;
        console.log(userData);
        data = {
            ...data,
            ...route.params.data,
            userId: userAuth.id,
            userToken: userAuth.token,
        };
        console.log(data);
        await postService.setPost(data);
    };

    return (
        <View>
            <Text>{'Content'}</Text>
            <BodyPost
                name="Code"
                placeholder="Type a something here..."
                required={true}
                maxLength={2000}
                errors={errors}
                control={control}
                numLines={8}
                customStyle={styles}
            />
            <Button title="Post It!" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};
export default NewPostNextStep;
