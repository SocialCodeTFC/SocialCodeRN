import React from 'react';
import Login from '../../components/screens/login-screen';
import Welcome from '../../components/screens/welcome';
import MenuDrawer from '../menu';
import { createStackNavigator } from '@react-navigation/stack';

const Start = createStackNavigator();
const StartNavigator = () => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Start.Navigator>
      <Start.Screen
        name={'Welcome'}
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Start.Screen
        name={'Login'}
        component={Login}
        options={{ headerShown: false, cardStyleInterpolator: forFade }}
      />
      <Start.Screen
        name={'Home'}
        component={MenuDrawer}
        options={{ headerShown: false }}
      />
    </Start.Navigator>
  );
};
export default StartNavigator;
