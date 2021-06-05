import React from 'react';
import { View, Text } from 'react-native';
import PostButton from './components/new-post-button';
import { styles } from './home.styles';

interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>{'Próximamente se pondrán aquí los posts'}</Text>
      <View style={styles.containerButton}>
        <PostButton navigation={navigation} />
      </View>
    </View>
  );
};
export default Home;
