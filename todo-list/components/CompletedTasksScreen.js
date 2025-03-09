import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import NavBar from './NavBar';
import styles from '../styles/styles'; // Assuming styles are in a separate file

const CompletedTasksScreen = ({ navigateTo }) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.createTaskInputWrapper}>
        <Text>Completed Tasks</Text>
      </View>
      <NavBar navigateTo={navigateTo} />
    </SafeAreaView>
  );
};

export default CompletedTasksScreen;
