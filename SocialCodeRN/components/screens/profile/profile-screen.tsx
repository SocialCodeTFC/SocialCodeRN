import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  DevSettings,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { authService } from '../../../services';
import ProfileHeader from './components/profile-header';
import TabBody from './components/profile-tab-body';
import { styleTokens } from '../../../styles';
import UserPosts from './components/userPosts';
import { styles } from './profile-screen.styles';
import Comments from './components/comments';
import SavedPosts from '../../base/saved-posts';
type AuthServiceResponse = {
  id: String;
  email: String;
  firstName: String;
  lastName: String;
  username: String;
};

const ProfileScreen = ({ navigation }) => {
  const [userAuth, setUserAuth] = useState(undefined);
  const [userData, setUserData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  const getUserData = async () => {
    setUserAuth(JSON.parse(await AsyncStorage.getItem('userStorage')));
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('userStorage');
    DevSettings.reload();
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userAuth) {
      if (userAuth == '400') {
        signOut();
      } else {
        authService.getUserById(userAuth, AsyncStorage).then(userData => {
          console.log('response', userData);

          console.log('sal', userData);
          const data = userData as AuthServiceResponse;
          setUserData({
            id: data.id,
            email: data.email,
            name: data.firstName,
            surname: data.lastName,
            alias: data.username,
          });
        });
      }
    }
  }, [userAuth]);

  useEffect(() => {
    if (userData) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        getUserData();
      }, 3000);
    }
  }, [userData]);

  const onFocusPosts = () => {
    setActiveTab(0);
  };
  const onFocusComents = () => {
    setActiveTab(1);
  };
  const onFocusSaved = () => {
    setActiveTab(2);
  };

  return isLoading ? (
    <View>
      <ActivityIndicator size="large" color={styleTokens.colors.mainViolet} />
      <Text>{'Loading...'}</Text>
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <ProfileHeader userData={userData} navigation={navigation} />
      <View>
        <TabBody
          activeTab={activeTab}
          onFocusPosts={onFocusPosts}
          onFocusComents={onFocusComents}
          onFocusSaved={onFocusSaved}
        />
      </View>
      {activeTab == 0 && (
        <UserPosts userAuth={userAuth} navigation={navigation} />
      )}
      {activeTab == 1 && (
        <Comments userAuth={userAuth} navigation={navigation} />
      )}
      {activeTab == 2 && <SavedPosts />}
    </SafeAreaView>
  );
};
export default ProfileScreen;
