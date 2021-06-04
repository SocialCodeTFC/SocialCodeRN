import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { styles } from './full-view-post.styles';
interface FullViewPostProps {
  route: any;
  navigation: any;
}

const FullViewPost = (props: FullViewPostProps) => {
  const { route, navigation } = props;
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
        <Text style={styles.subtitle}>{'Comments:'}</Text>
        <View>
          {route.params.comments?.length ? (
            route.params.comments.map(
              (comments, index) =>
                comments && (
                  <View key={`${comments}+${index}`}>
                    <View style={styles.textTags} key={`${index}-${comments}`}>
                      <Text key={`${index}+${comments}`}>{comments}</Text>
                    </View>
                  </View>
                ),
            )
          ) : (
            <Text>{'0'}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default FullViewPost;
