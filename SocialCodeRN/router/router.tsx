import React from 'react';
import MenuDrawer from './menu';
import { NavigationContainer } from '@react-navigation/native';
const Router = () => {
    return (
        <NavigationContainer>
            <MenuDrawer />
        </NavigationContainer>
    );
};
export default Router;
