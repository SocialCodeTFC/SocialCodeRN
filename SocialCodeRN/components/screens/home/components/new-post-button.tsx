import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './new-post-button.styles';
import { Plus } from 'react-native-feather';
interface PostButtonProps {
    navigation: any;
}
const PostButton = (props: PostButtonProps) => {
    const { navigation } = props;
    const goToNewPost = () => {
        navigation.navigate('CreatePost');
    };
    return (
        <TouchableOpacity style={styles.button} onPress={goToNewPost}>
            <Plus stroke="white" width={50} height={50} />
        </TouchableOpacity>
    );
};
export default PostButton;
