import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import PostButton from './components/new-post-button';
import { styles } from './home.styles';
import AsyncStorage from '@react-native-community/async-storage';
import { postService } from '../../../services';
import PostTagItem from '../../base/post-tag-item';
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
    const getUser = await JSON.parse(await AsyncStorage.getItem('userStorage'));
    try {
      if (getUser) {
        console.log(getUser);
        setUser(getUser);
        getUserTags(getUser);
      }
    } catch {}
  };
  const getUserTags = async user => {
    const getTags = await JSON.parse(
      await AsyncStorage.getItem(`userTags${user.id}`),
    );
    try {
      if (getTags) {
        setUserTags(getTags);
      }
    } catch {}
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userTags?.length) {
      console.log(userTags);
      postService
        .getByTags(userTags, user)
        .then(response => {
          setTagPosts(response);
          console.log(response);
        })
        .catch(error => console.log(error));
    } else {
      setTagPosts([]);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [userTags]);

  const reloadPosts = () => {
    getUserTags(user);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tagPosts}
        initialNumToRender={20}
        keyExtractor={(_item, index) => `${index}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onRefresh={reloadPosts}
        refreshing={isLoading}
        ListEmptyComponent={<Text>{'There are no posts here'}</Text>}
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
              id={item.id}
              user={user}
            />
          </View>
        )}
      />
      <View style={styles.containerButton}>
        <PostButton navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
export default Home;
