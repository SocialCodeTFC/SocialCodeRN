import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-community/async-storage';
import SearchBar from '../../base/search-bar';
import { Search } from 'react-native-feather';
import { styleTokens } from '../../../styles';
import HashtagField from '../../base/hashtag-field-input';
type FormInputs = {
  search: string;
};
type TagInput = {
  Tags: [];
};

interface DiscoveryProps {
  navigation: any;
}

const Discovery = ({ navigation }: DiscoveryProps) => {
  const [user, setUser] = useState({});
  const [userTags, setUserTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTags, setNewTags] = useState([]);
  const [tagValue, setTagValue] = useState('');

  const setUserData = async () => {
    setUser(JSON.parse(await AsyncStorage.getItem('userStorage')));
  };
  useEffect(() => {
    setIsLoading(true);
    if (user) {
      setTags();
    } else {
      setUserData();
    }
  }, [user]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs | TagInput>({ mode: 'onChange' });
  const onSubmit = (data: FormInputs) => {};
  const onAddTag = (data: TagInput) => {
    data = { ...data, Tags: newTags };
    saveUserTags(data);
  };

  const setTags = async () => {
    const savedTags = JSON.parse(
      await AsyncStorage.getItem(`userTags${user.id}`),
    );
    if (savedTags) {
      setUserTags([...savedTags]);
    } else {
      setUserTags([]);
    }
    setIsLoading(false);
  };

  const deleteUserTags = async indexDelete => {
    setIsLoading(true);
    const filteredTags = userTags.filter(
      (_item, index) => index !== indexDelete,
    );
    setUserTags(filteredTags);
    await AsyncStorage.setItem(
      `userTags${user.id}`,
      JSON.stringify(filteredTags),
    ).then(() => setIsLoading(false));
  };

  const saveUserTags = async data => {
    setIsLoading(true);
    if (newTags?.length) {
      setUserTags([...userTags, ...data.Tags]);
      await AsyncStorage.setItem(
        `userTags${user.id}`,
        JSON.stringify([...userTags, ...data.Tags]),
      ).then(() => setIsLoading(false));
    }
  };

  return (
    <SafeAreaView>
      <View>
        <SearchBar
          name="search"
          errors={errors}
          control={control}
          placeholder="Search a tag!"
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Search
            stroke={styleTokens.colors.mainViolet}
            width={16}
            height={16}
          />
        </TouchableOpacity>
      </View>
      <Text>{'Favourite tags:'}</Text>
      <View>
        <HashtagField
          tags={newTags}
          control={control}
          setTagValue={setTagValue}
          setTags={setNewTags}
          tagValue={tagValue}
        />
        <TouchableOpacity onPress={handleSubmit(onAddTag)}>
          <Text>{'add tags!'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={userTags}
        initialNumToRender={5}
        initialScrollIndex={0}
        keyExtractor={(_item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onRefresh={setTags}
        refreshing={isLoading}
        ListEmptyComponent={<Text>{'You do not have tags'}</Text>}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text>{item}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteUserTags(index)}>
              <Text>{'delete tag'}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Discovery;
