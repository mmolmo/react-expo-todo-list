import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Platform } from 'react-native';
import { CheckBox, Input, Button } from '@rneui/themed';

// import { FlatList } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  text: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  checkBox: {
    marginLeft: 10,
    padding: 10,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  input: {
    marginLeft: 10,
    padding: 10,
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '50%',   // <-- Max width is 80%
    minHeight: 20,     // <-- Min height is 20
  },
  taskItem: {
    gap: 10,
    borderWidth: 2,
    borderColor: '#D595F5',
    borderRadius: 8,
    marginBottom: 10,
  },
  createTaskInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F7E9FD',
  },
  createTaskButton: {
    backgroundColor: '#9D2FD4',
  },
  completedtaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 16,
  },
  todotaskText: {
    fontSize: 16,
  }
});

export default function App() {
  // const [checked, setChecked] = React.useState(true);
  // const toggleCheckbox = () => setChecked(!checked);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheckbox = (key) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the specific item's state
    }));
  };

  let data = [
    {
      key: "1",
      completed: false,
      description: "Wash Car"
    },
    {
      key: "2",
      completed: false,
      description: "Get Groceries"
    },
    {
      key: "3",
      completed: false,
      description: "Call Gym!"
    }
  ]
  
  let renderItem = ({ item }) => {
    const isChecked = checkedItems[item.key] || false;
    return (
      <View style={styles.taskItem}>
        <CheckBox
          title={item.description}
          checked={checkedItems[item.key] || false} // Default to false if not in state
          onPress={() => toggleCheckbox(item.key)}
          style={styles.checkBox}
          textStyle={isChecked ? styles.completedtaskText : styles.todotaskText}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
        />
        {/* <Text style={styles.text}>{item.description}</Text> */}
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.createTaskInputWrapper}>
          <Input
            placeholder='Create new task'
            style={styles.input}
          />
          <Button 
            title='+' 
            buttonStyle={styles.createTaskButton} 
            containerStyle={{
              marginHorizontal: 50,
              marginVertical: 10,
              borderRadius: 10,
            }}
            titleStyle={{ color: 'white', marginHorizontal: 20 }}
          />
        </View>
        <FlatList data={data} renderItem={renderItem}></FlatList>
      </>
    </SafeAreaView>
  )
}



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

