import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './menu-screen.styles';
import { View, ViewStyle, Text } from 'react-native';
import HomeScreen from '../../components/screens/home';
import Login from '../../components/screens/login-screen';
import Profile from '../../components/screens/profile';
import NewPost from '../../components/screens/new-post';
import NewPostNextStep from '../../components/screens/new-post-next-step';
import Icon from '../../components/base/icon';
import { Menu, User } from 'react-native-feather';
const Stack = createStackNavigator();

const DefaultNavigator = ({ navigation }) => {
    const forFade = ({ current, closing }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#7752ff',
                        height: 75,
                    },
                    headerTitle: '<Social Code>',
                    headerTitleStyle: styles.header,
                    cardStyleInterpolator: forFade,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                        >
                            <View style={styles.buttonMenu}>
                                <Menu color={'white'} width={40} height={40} />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <View style={styles.buttonMenu}>
                                <User color={'white'} width={40} height={40} />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    cardStyleInterpolator: forFade,
                    headerStyle: {
                        backgroundColor: '#7752ff',
                        height: 75,
                    },
                }}
            />
            <Stack.Screen name="CreatePost" component={NewPost} />
            <Stack.Screen
                name="CreatePostNextStep"
                component={NewPostNextStep}
            />
        </Stack.Navigator>
    );
};

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tabs.Navigator
            initialRouteName="Home"
            backBehavior="history"
            screenOptions={({ route }) => ({
                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ focused }) => (
                    <Icon
                        color={focused ? '#7752ff' : 'gray'}
                        width={24}
                        height={24}
                        name={route.name}
                    />
                ),
                title: route.name,
            })}
            tabBarOptions={{
                activeTintColor: 'gray',
                inactiveTintColor: 'gray',
                keyboardHidesTabBar: true,
                style: {
                    height: 64,
                },
                labelStyle: {
                    marginBottom: 4,
                    textAlign: 'center',
                },
                tabStyle: {
                    marginTop: 8,
                },
            }}
        >
            <Tabs.Screen name="Home" component={DefaultNavigator} />
            <Tabs.Screen name="Login" component={Login} />
        </Tabs.Navigator>
    );
};

const Drawer = createDrawerNavigator();

function MenuDrawer() {
    return (
        <Drawer.Navigator initialRouteName={'Home'}>
            <Drawer.Screen name="Home" component={TabNavigator} />
        </Drawer.Navigator>
    );
}

export default MenuDrawer;
