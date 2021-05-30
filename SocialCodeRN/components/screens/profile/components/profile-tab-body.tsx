import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './profile-tab-body.styles';

interface TabBodyProps {
    activeTab: Number;
    onFocusPosts: any;
    onFocusComents: any;
    onFocusSaved: any;
}
const TabBody = (props: TabBodyProps) => {
    const { activeTab, onFocusPosts, onFocusComents, onFocusSaved } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={activeTab === 0 ? styles.tabsOnFocus : styles.tabs}
                onPress={onFocusPosts}
            >
                <Text style={styles.text}>{'Posts'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={activeTab === 1 ? styles.tabsOnFocus : styles.tabs}
                onPress={onFocusComents}
            >
                <Text style={styles.text}>{'Coments'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={activeTab === 2 ? styles.tabsOnFocus : styles.tabs}
                onPress={onFocusSaved}
            >
                <Text style={styles.text}>{'Saved'}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default TabBody;
