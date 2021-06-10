import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { postService } from '../../../../services';
import CommentItem from '../../../base/comment-item';
import { styles } from './comments.styles';
type commentValidation = {
  username: string;
  token: string;
};

interface CommentsProps {
  userAuth: commentValidation;
  navigation: any;
}

const Comments = (props: CommentsProps) => {
  const { userAuth, navigation } = props;
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const getComments = () => {
    let loadComments = [];
    postService
      .getUserComments(userAuth.username, userAuth.token)
      .then(response => {
        loadComments = response;
        if (loadComments?.length) {
          setComments(loadComments);
          setError(0);
        } else if (response >= 400) {
          setError(response);
        }
        setIsLoading(false);
      })
      .catch();
  };
  useEffect(() => {
    setIsLoading(true);
    getComments();
  }, []);
  return (
    <FlatList
      data={comments}
      initialNumToRender={comments?.length ? 10 : 0}
      keyExtractor={(_item, index) => `${index}`}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      onRefresh={getComments}
      refreshing={isLoading}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text>{'You do not have comments'}</Text>}
      renderItem={({ item, index }) => (
        <View>
          <CommentItem comments={item} index={index} />
        </View>
      )}
    />
  );
};
export default Comments;
