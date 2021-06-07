import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import { postService } from '../../../services';
import PostTagItem from '../../base/post-tag-item';
import { styles } from './search-screen.styles';

interface SearchScreenProps {
  navigation: any;
  route: any;
}
/* */
const SearchScreen = ({ navigation, route }: SearchScreenProps) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let tag = [route.params.item];
  const getPostsByTags = () => {
    postService
      .getByTags(tag, route.params.user)
      .then(response => {
        setPosts(response);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getPostsByTags();
  }, []);

  const reloadPosts = () => {
    setIsLoading(true);
    getPostsByTags();
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={posts}
          initialNumToRender={20}
          keyExtractor={(_item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
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
    </View>
  );
};
export default SearchScreen;
