import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './PostItem.styles';
interface PostItemProps {
    title: string;
    tags?: Array<string>;
    description: string;
    date: Date | string;
}
const PostItem = (props: PostItemProps) => {
    const { title, tags, description, date } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {tags &&
                tags.map((hashtags, index) =>
                    hashtags ? (
                        <View key={`${hashtags}+${index}`}>
                            <View key={`${index}-${hashtags}`}>
                                <Text key={`${index}+${hashtags}`}>
                                    {hashtags}
                                </Text>
                            </View>
                        </View>
                    ) : (
                        <></>
                    ),
                )}
            <Text>{description}</Text>
            <Text>{date}</Text>
        </View>
    );
};
export default PostItem;
