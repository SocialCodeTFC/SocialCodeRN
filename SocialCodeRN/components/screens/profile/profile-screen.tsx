import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { authService } from '../../../services';
import ProfileHeader from './components/profile-header';
import TabBody from './components/profile-tab-body';
type AuthServiceResponse = {
    id: String;
    email: String;
    firstName: String;
    lastName: String;
    userName: String;
};

const ProfileScreen = () => {
    const [userAuth, setUserAuth] = useState(undefined);
    const [userData, setUserData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);

    const getUserData = async () => {
        setUserAuth(JSON.parse(await AsyncStorage.getItem('userStorage')));
    };
    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        if (userAuth) {
            authService.getUserById(userAuth).then(response => {
                const data = response as AuthServiceResponse;
                setUserData({
                    id: data.id,
                    email: data.email,
                    name: data.firstName,
                    surname: data.lastName,
                    alias: data.userName,
                });
                console.log(response);
            });
        }
    }, [userAuth]);

    useEffect(() => {
        if (userData) {
            setIsLoading(false);
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
            <Text>{'Loading...'}</Text>
        </View>
    ) : (
        <View>
            <ProfileHeader userData={userData} />
            <View>
                <TabBody
                    activeTab={activeTab}
                    onFocusPosts={onFocusPosts}
                    onFocusComents={onFocusComents}
                    onFocusSaved={onFocusSaved}
                />
            </View>
        </View>
    );
};
export default ProfileScreen;
