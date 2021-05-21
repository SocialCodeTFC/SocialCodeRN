import React from 'react';
import Router from './router';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return <Router />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
