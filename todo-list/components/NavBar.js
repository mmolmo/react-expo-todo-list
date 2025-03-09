import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, Platform } from 'react-native';
import { CheckBox, Icon, Input, Button } from '@rneui/themed';

import styles from '../styles/styles'; // Import styles if in separate file

const NavBar = ({ navigateTo }) => {
  return (
    <View style={styles.navBar}>
      <Icon
        name='clipboard-outline'
        type='ionicon'
        iconStyle={styles.navIcon}
        onPress={() => navigateTo('MainScreen')}
      />
      <Icon
        name='checkmark-circle-outline'
        type='ionicon'
        iconStyle={styles.navIcon}
        onPress={() => navigateTo('CompletedTasksScreen')}
      />
      <Icon
        name='person-outline'
        type='ionicon'
        iconStyle={styles.navIcon}
        onPress={() => navigateTo('ProfileScreen')}
      />
    </View>
  );
};

export default NavBar;
