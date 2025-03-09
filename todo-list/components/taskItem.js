import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { CheckBox, Icon } from '@rneui/themed';

// import React from 'react';
// import { View } from 'react-native';
// import { CheckBox } from '@rneui/themed';
import styles from '../styles/styles'; // Import styles if in separate file

const TaskItem = ({ item, checked, toggleCheckbox, handleDeleteTask }) => {
  return (
    <>
    <View style={styles.taskItem}>
      <CheckBox
        title={item.description}
        checked={checked}
        onPress={() => toggleCheckbox(item.key)}
        style={styles.checkBox}
        textStyle={checked ? styles.completedtaskText : styles.todotaskText}
        
        checkedColor="green"
      />
      <Icon
        name='trash-outline'
        type='ionicon'
        iconStyle={styles.trashIcon}
        onPress={() => handleDeleteTask(item.key)}
      />
    </View>
    </>
  );
};

export default TaskItem;
