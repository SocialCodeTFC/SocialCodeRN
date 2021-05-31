import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './menu-screen.styles';
import { View } from 'react-native';
import HomeScreen from '../../components/screens/home';
import Login from '../../components/screens/login-screen';
import Profile from '../../components/screens/profile';
import NewPost from '../../components/screens/new-post';
import NewPostNextStep from '../../components/screens/new-post-next-step';
import Icon from '../../components/base/icon';
import { Menu, User, ArrowLeft } from 'react-native-feather';
import { styleTokens } from '../../styles';

const forFade = ({ current, closing }) => ({
    cardStyle: {
        opacity: closing.progress,
    },
});
const Stack = createStackNavigator();

const StackTabsNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: {
                        ...styleTokens.backgroundColor.mainViolet,
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
                                <Menu
                                    color={styleTokens.colors.white}
                                    width={40}
                                    height={40}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <View style={styles.buttonMenu}>
                                <User
                                    color={styleTokens.colors.white}
                                    width={40}
                                    height={40}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
    return (
        <Tabs.Navigator
            initialRouteName="Home"
            backBehavior="history"
            screenOptions={({ route }) => ({
                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ focused }) => (
                    <Icon
                        color={
                            focused
                                ? styleTokens.colors.mainViolet
                                : styleTokens.colors.darkGray
                        }
                        width={24}
                        height={24}
                        name={route.name}
                    />
                ),
                title: route.name,
            })}
            tabBarOptions={{
                activeTintColor: styleTokens.colors.mainViolet,
                inactiveTintColor: styleTokens.colors.darkGray,
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
            <Tabs.Screen name="Home" component={StackTabsNavigator} />
            <Tabs.Screen name="Login" component={Login} />
        </Tabs.Navigator>
    );
};
const DefaultNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: forFade,
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    cardStyleInterpolator: forFade,
                    headerStyle: {
                        ...styleTokens.backgroundColor.mainViolet,
                        height: 75,
                    },
                    headerTitleStyle: styles.header,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                        >
                            <ArrowLeft
                                stroke={styleTokens.colors.white}
                                width={40}
                                height={40}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="CreatePost"
                component={NewPost}
                options={{
                    cardStyleInterpolator: forFade,
                    title: 'New post',
                    headerStyle: {
                        ...styleTokens.backgroundColor.mainViolet,
                        height: 75,
                    },
                    headerTitleStyle: styles.header,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                        >
                            <ArrowLeft
                                stroke={styleTokens.colors.white}
                                width={40}
                                height={40}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="CreatePostNextStep"
                component={NewPostNextStep}
                options={{
                    cardStyleInterpolator: forFade,
                    title: 'New post',
                    headerStyle: {
                        ...styleTokens.backgroundColor.mainViolet,
                        height: 75,
                    },
                    headerTitleStyle: styles.header,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                        >
                            <ArrowLeft
                                stroke={styleTokens.colors.white}
                                width={40}
                                height={40}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="FullViewPost"
                component={NewPost}
                options={{
                    cardStyleInterpolator: forFade,
                    title: '',
                    headerStyle: {
                        ...styleTokens.backgroundColor.mainViolet,
                        height: 75,
                    },
                    headerTitleStyle: styles.header,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                        >
                            <ArrowLeft
                                stroke={styleTokens.colors.white}
                                width={40}
                                height={40}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

const Drawer = createDrawerNavigator();

function MenuDrawer() {
    return (
        <Drawer.Navigator initialRouteName={'Home'}>
            <Drawer.Screen name="Home" component={DefaultNavigator} />
        </Drawer.Navigator>
    );
}

export default MenuDrawer;
