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
                style={(styles.tabs, activeTab === 0 ? styles.tabsOnFocus : {})}
                onPress={onFocusPosts}
            >
                <Text>Posts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={(styles.tabs, activeTab === 1 ? styles.tabsOnFocus : {})}
                onPress={onFocusComents}
            >
                <Text>Coments</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={(styles.tabs, activeTab === 2 ? styles.tabsOnFocus : {})}
                onPress={onFocusSaved}
            >
                <Text>Saved</Text>
            </TouchableOpacity>
        </View>
    );
};
export default TabBody;
