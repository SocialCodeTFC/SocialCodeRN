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
import { styleTokens } from '../../../styles';
import HashtagField from '../../base/hashtag-field-input';
import { styles } from './discovery-screen.styles';
import { X, Search } from 'react-native-feather';
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
  const [user, setUser] = useState(undefined);
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

  const onSubmit = (data: FormInputs) => {
    navigation.navigate('Search', { item: data.search, user });
  };

  const setTags = async () => {
    const savedTags = JSON.parse(
      await AsyncStorage.getItem(`userTags${user.id}`),
    );
    if (savedTags) {
      console.log(savedTags);

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
    console.log(user);
    await AsyncStorage.setItem(
      `userTags${user.id}`,
      JSON.stringify(filteredTags),
    ).then(() => setIsLoading(false));
  };

  const saveUserTags = async data => {
    setIsLoading(true);
    const tagsData = new Set([...userTags, data]);
    await AsyncStorage.setItem(
      `userTags${user.id}`,
      JSON.stringify([...tagsData]),
    );
    setTags();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <SearchBar
              name="search"
              errors={errors}
              control={control}
              placeholder="Search a tag!"
            />
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Search
                stroke={styleTokens.colors.mainViolet}
                width={20}
                height={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tagSubtitleContainer}>
          <Text style={styles.subtitle}>{'Your favourite tags:'}</Text>
        </View>
        <View>
          <HashtagField
            tags={newTags}
            control={control}
            setTagValue={setTagValue}
            setTags={setNewTags}
            tagValue={tagValue}
            doNotShowTags={true}
            saveTags={saveUserTags}
          />
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
          ListEmptyComponent={
            <Text style={styles.emptyList}>{'You do not have tags'}</Text>
          }
          renderItem={({ item, index }) => (
            <View style={styles.tagsContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search', { item, user })}
              >
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteUserTags(index)}>
                <X stroke={styleTokens.colors.white} width={16} height={16} />
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};
export default Discovery;
