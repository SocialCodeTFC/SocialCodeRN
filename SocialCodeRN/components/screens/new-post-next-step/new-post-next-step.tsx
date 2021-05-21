import React from 'react';
import { View, Text, Button } from 'react-native';
import { useForm } from 'react-hook-form';
import BodyPost from '../../base/post-body-field';
import { styles } from './new-post-next-step.styles';

interface NewPostNextStepProps {
    navigation: any;
    route: any;
}
type FormInputs = {
    title: string;
};
const NewPostNextStep = (props: NewPostNextStepProps) => {
    const { navigation, route } = props;
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({ mode: 'onChange' });
    const onSubmit = (data: FormInputs) => {
        data = { ...data, ...route.params.data };
        console.log(data);
    };
    return (
        <View>
            <Text>{'Content'}</Text>
            <BodyPost
                name="Body"
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
