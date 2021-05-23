import React, { useEffect, useState } from 'react';
import MenuDrawer from './menu';
import { NavigationContainer } from '@react-navigation/native';
import StartNavigator from './start-navigator';
import AsyncStorage from '@react-native-community/async-storage';

const Router = () => {
    const [isTheFirstTime, setIsTheFirstTime] = useState(true);
    const [recoverUserData, setRecoverUserData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const getUserData = async () => {
        setRecoverUserData(
            JSON.parse(await AsyncStorage.getItem('userStorage')),
        );
    };

    useEffect(() => {
        getUserData();
    }, []);
    useEffect(() => {
        if (recoverUserData) {
            setIsTheFirstTime(false);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, [recoverUserData]);
    return isLoading ? (
        <></>
    ) : (
        <NavigationContainer>
            {isTheFirstTime ? <StartNavigator /> : <MenuDrawer />}
        </NavigationContainer>
    );
};
export default Router;
