import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { View, Text, TouchableOpacity, DevSettings } from 'react-native';
import { styles } from './profile-header.styles';
import { LogOut } from 'react-native-feather';
import { styleTokens } from '../../../../styles';
interface ProfileHeaderProps {
  userData: object;
  navigation: any;
}
type UserDataTypes = {
  name: string;
  surname: string;
  alias: string;
};
const ProfileHeader = (props: ProfileHeaderProps) => {
  const userData = props.userData as UserDataTypes;
  const navigation = props.navigation;
  const signOut = async () => {
    await AsyncStorage.removeItem('userStorage');
    DevSettings.reload();
  };
  return (
    <View style={styles.containerCol}>
      <TouchableOpacity style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.text}>{userData.name}</Text>
        <Text style={styles.text}>{userData.surname}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.alias}>{userData.alias}</Text>
        <TouchableOpacity onPress={signOut} style={styles.signout}>
          <LogOut stroke={styleTokens.colors.darkGray} />
          <Text style={styles.alias}>{'Sing out'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileHeader;
