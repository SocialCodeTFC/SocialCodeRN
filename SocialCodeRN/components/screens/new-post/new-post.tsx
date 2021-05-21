import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import TitleField from '../../base/title-field-input';
import BodyPost from '../../base/post-body-field';
import { styles } from './new-post.styles';
import { ArrowRight } from 'react-native-feather';
interface NewPostProps {
    navigation: any;
    route: any;
}
type FormInputs = {
    title: string;
};
const NewPost = (props: NewPostProps) => {
    const { navigation, route } = props;
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({ mode: 'onChange' });
    const onSubmit = (data: FormInputs) => {
        navigation.navigate('CreatePostNextStep', { data });
    };
    return (
        <View>
            <Text>{'Title'}</Text>
            <TitleField
                name="title"
                placeholder="Post title"
                required={true}
                maxLength="100"
                errors={errors}
                control={control}
            />
            <Text>{'Description'}</Text>
            <BodyPost
                name="Description"
                placeholder="Type a description..."
                required={true}
                maxLength={200}
                errors={errors}
                control={control}
                numLines={4}
            />
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(onSubmit)}
                >
                    <View style={styles.contentButton}>
                        <Text style={styles.nextButton}>{'Next!'}</Text>
                        <ArrowRight stroke="white" width={50} height={50} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default NewPost;
