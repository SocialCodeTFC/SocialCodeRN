import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './welcome-screen.styles';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{'<SocialCode>'}</Text>
            <Text style={styles.text}>
                Send and search code anywhere and anytime!
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login');
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Start now!</Text>
            </TouchableOpacity>
        </View>
    );
};
export default WelcomeScreen;
