import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useForm } from 'react-hook-form';
import BodyPost from '../../base/post-body-field';
import { styles } from './new-post-next-step.styles';
import AsyncStorage from '@react-native-community/async-storage';
import { postService } from '../../../services';
import { ArrowRight } from 'react-native-feather';
import { styleTokens } from '../../../styles';
import { ScrollView } from 'react-native-gesture-handler';
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
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{'Content'}</Text>
        <BodyPost
          name="Code"
          placeholder="Type something here..."
          required={true}
          maxLength={2000}
          errors={errors}
          control={control}
          numLines={8}
          customStyle={styles}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <View style={styles.contentButton}>
            <Text style={styles.buttonText}>{'Post It!'}</Text>
            <ArrowRight
              stroke={styleTokens.colors.white}
              width={50}
              height={50}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NewPostNextStep;
