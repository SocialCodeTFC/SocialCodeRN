import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './post-tag-item.styles';
interface PostItemProps {
  title: string;
  tags?: Array<string>;
  description: string;
  date: Date | string;
  navigation: any;
  code: string;
  authorUsername?: string;
  authorName?: string;
  comments?: string;
  isFree?: boolean;
  price?: number;
  id: string;
  user: object;
}
const PostTagItem = (props: PostItemProps) => {
  const {
    title,
    tags,
    description,
    date,
    navigation,
    code,
    authorUsername,
    authorName,
    comments,
    id,
    user,
  } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('FullViewPost', {
          title,
          tags,
          description,
          date,
          code,
          authorUsername,
          authorName,
          comments,
          id,
          user,
        })
      }
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.tagsContainer}>
        {tags &&
          tags.map((hashtags, index) =>
            hashtags ? (
              <View key={`${hashtags}+${index}`}>
                <View key={`${index}-${hashtags}`}>
                  <Text style={styles.tags} key={`${index}+${hashtags}`}>
                    {hashtags}
                  </Text>
                </View>
              </View>
            ) : (
              <></>
            ),
          )}
      </View>
      <Text>{description}</Text>
      <Text>{date}</Text>
    </TouchableOpacity>
  );
};
export default PostTagItem;
