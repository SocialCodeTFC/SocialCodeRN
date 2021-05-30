import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    FlatList,
    View,
    Text,
} from 'react-native';
import { postService } from '../../../../services';
import { styleTokens } from '../../../../styles';
import { styles } from './UserPosts.styles';
import PostItem from './PostItem';

interface UserPostProps {
    userAuth: object;
}

const UserPost = (props: UserPostProps) => {
    const [userPosts, setUserPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { userAuth } = props;
    useEffect(() => {
        if (userAuth) {
            postService
                .getAllUserPosts(userAuth)
                .then(response => {
                    setUserPosts(response);
                    console.log(response);
                })
                .catch(error => console.log(error));
        }
    }, []);

    useEffect(() => {
        if (userPosts?.length) {
            setIsLoading(false);
            console.log(userPosts);
        }
    }, [userPosts]);

    const reloadPosts = () => {
        setIsLoading(true);
        if (userAuth) {
            postService
                .getAllUserPosts(userAuth)
                .then(response => {
                    setUserPosts(response);
                    setIsLoading(false);
                })
                .catch(() => setIsLoading(false));
        }
    };

    return isLoading ? (
        <View>
            <ActivityIndicator
                size="large"
                color={styleTokens.colors.mainViolet}
            />
        </View>
    ) : (
        <FlatList
            data={userPosts}
            initialNumToRender={userPosts.length}
            keyExtractor={(_item, index) => `${index}`}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onRefresh={reloadPosts}
            refreshing={isLoading}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <View>
                    <PostItem
                        title={item.title}
                        tags={item.tags}
                        description={item.description}
                        date={item.timestamp}
                    />
                </View>
            )}
        />
    );
};
export default UserPost;
