import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import PostButton from './components/new-post-button';
import { styles } from './home.styles';
import AsyncStorage from '@react-native-community/async-storage';
import { postService } from '../../../services';
import PostTagItem from '../../base/post-tag-item';
import { styleTokens } from '../../../styles';
interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  const { navigation } = props;
  const [user, setUser] = useState(undefined);
  const [userTags, setUserTags] = useState(undefined);
  const [tagPosts, setTagPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getUserData = async () => {
    setUser(JSON.parse(await AsyncStorage.getItem('userStorage')));
  };
  const getUserTags = async () => {
    const getTags = JSON.parse(
      await AsyncStorage.getItem(`userTags${user.id}`),
    );
    if (getTags) {
      setUserTags(getTags);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user) {
      getUserTags();
    }
  }, [user]);

  useEffect(() => {
    if (userTags?.length) {
      postService
        .getByTags(userTags, user)
        .then(response => {
          setTagPosts(response.items);
        })
        .catch(error => console.log(error));
    }
  }, [userTags]);

  useEffect(() => {
    if (tagPosts?.length) {
      setIsLoading(false);
    }
  }, [tagPosts]);

  const reloadPosts = () => {
    getUserTags();
  };

  return isLoading ? (
    <View>
      <ActivityIndicator size="large" color={styleTokens.colors.mainViolet} />
    </View>
  ) : (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={tagPosts}
          initialNumToRender={20}
          keyExtractor={(_item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onRefresh={reloadPosts}
          refreshing={isLoading}
          ListEmptyComponent={<Text>{'There is not posts here'}</Text>}
          renderItem={({ item }) => (
            <View>
              <PostTagItem
                navigation={navigation}
                title={item.title}
                tags={item.tags}
                description={item.description}
                date={item.timestamp}
                code={item.code}
                authorUsername={item.authorUsername}
                authorName={item.authorName}
                comments={item.comments}
                isFree={item.isFree}
                price={item.price}
              />
            </View>
          )}
        />
      </SafeAreaView>
      <View style={styles.containerButton}>
        <PostButton navigation={navigation} />
      </View>
    </View>
  );
};
export default Home;
