import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './profile-header.styles';
interface ProfileHeaderProps {
    userData: object;
}
type UserDataTypes = {
    name: string;
    surname: string;
    alias: string;
};
const ProfileHeader = (props: ProfileHeaderProps) => {
    const userData = props.userData as UserDataTypes;
    return (
        <View style={styles.containerCol}>
            <TouchableOpacity style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.text}>{userData.name}</Text>
                <Text style={styles.text}>{userData.surname}</Text>
            </View>
            <Text style={styles.alias}>{userData.alias}</Text>
        </View>
    );
};
export default ProfileHeader;
