import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { styles } from './full-view-post.styles';
import CommentsInput from '../../base/comment-input';
import { useForm } from 'react-hook-form';
import { postService } from '../../../services';
import { Send } from 'react-native-feather';
import { styleTokens } from '../../../styles';
import CommentItem from '../../base/comment-item';

interface FullViewPostProps {
  route: any;
  navigation: any;
}

type FormInputs = {
  comment: string;
};

const FullViewPost = (props: FullViewPostProps) => {
  const { route, navigation } = props;
  console.log(route.params);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(0);
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onChange' });
  const onSubmit = (data: FormInputs) => {
    if (data && data.comment != '') {
      data = { ...data, ...route.params.user, postId: route.params.id };
      postService.addComment(data).then(getComments);
      reset();
    }
  };

  const getComments = () => {
    let loadComments = [];
    postService
      .getAllComments(route.params.id, route.params.user.token)
      .then(response => {
        loadComments = response;
        if (loadComments?.length) {
          setComments(loadComments);
          setError(0);
        } else if (response >= 400) {
          setError(response);
        }
      })
      .catch();
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.postContainer}>
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.user}>{route.params.authorName}</Text>
          <Text style={styles.user}>{route.params.authorUsername}</Text>
          <Text style={styles.date}>{route.params.date}</Text>
        </View>
        <Text style={styles.subtitle}>{'Tags: '}</Text>
        <View style={styles.tagsContainer}>
          {route.params.tags.map(
            (hashtags, index) =>
              hashtags && (
                <View key={`${hashtags}+${index}`}>
                  <View style={styles.textTags} key={`${index}-${hashtags}`}>
                    <Text key={`${index}+${hashtags}`}>{hashtags}</Text>
                  </View>
                </View>
              ),
          )}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.text}>{route.params.description}</Text>
        </View>
        <Text style={styles.subtitle}>{'Code:'}</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.code}>{route.params.code}</Text>
        </View>
        <Text style={styles.subtitle}>{`Comments: ${comments.length}`}</Text>

        <View style={styles.commentsContainer}>
          {comments?.length ? (
            comments.map(
              (comments, index) =>
                comments && <CommentItem index={index} comments={comments} />,
            )
          ) : error == 404 ? (
            <Text>{'There are no comments...'}</Text>
          ) : (
            <Text>{error}</Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.input}>
        <CommentsInput
          placeholder="Insert a comment            "
          errors={errors}
          control={control}
          name="comment"
        />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.ctaButton}
        >
          <Send stroke={styleTokens.colors.mainViolet} width={30} height={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default FullViewPost;
