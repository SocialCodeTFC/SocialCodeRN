import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './comment-item.styles';

type CommentsType = {
  timestamp: string;
  authorUsername: string;
  content: string;
};

interface CommentsProps {
  comments: CommentsType;
  index: number;
}
const CommentItem = (props: CommentsProps) => {
  const { comments, index } = props;
  return (
    <View key={`${comments.timestamp}+${index}`} style={styles.comments}>
      <View key={`${index}-${comments.timestamp}`} style={styles.commentHeader}>
        <Text
          key={`${index}+${comments.authorUsername}`}
          style={styles.userAlias}
        >
          {comments.authorUsername}
        </Text>
        <Text key={`${index}+${comments.timestamp}`} style={styles.commentDate}>
          {comments.timestamp}
        </Text>
      </View>
      <Text key={`${index}+${comments.content}`} style={styles.commentText}>
        {comments.content}
      </Text>
    </View>
  );
};
export default CommentItem;
