import React, { useState } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { Input, Button, } from '@rneui/themed';
import TaskItem from './taskItem';
import NavBar from './NavBar';
import styles from '../styles/styles'; // Assuming styles are in a separate file

const MainScreen = ({ navigateTo }) => {
    const initialData = [
    { key: "1", completed: false, description: "Wash Car" },
    { key: "2", completed: false, description: "Get Groceries" },
    { key: "3", completed: false, description: "Call Gym!" }
  ];

const [taskList, setTaskList] = useState(initialData);
const [inputtext, setInputText] = useState('');

const toggleCheckbox = (key) => {
  setTaskList((prevTasks) => 
    prevTasks.map(task => 
      task.key === key ? { ...task, completed: !task.completed } : task
    )
  );  // Log the updated list to verify
  console.log("Task List:", taskList);
};

const handleDeleteTask = (key) => {
  setTaskList((prevTasks) => 
    prevTasks.filter(task => task.key !== key)
  );  // Log the updated list to verify
  // console.log("Updated Task List:", taskList);
};

const handleInputChange = (inputValue) => {
    setInputText(inputValue);
    // console.log("Input Changed", inputtext);
};

const handleSubmit = () => {
    // console.log("button pressed", inputtext);

    const newTask = {
        key: ("id" + (Math.floor(Math.random(taskList.length + 1)*1000000))).toString(),
        completed: false,
        description: inputtext,
    };

    if (inputtext.trim() !== '') {
        setTaskList((prevTasks) => [...prevTasks, newTask]);
    }
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.createTaskInputWrapper}>
        <Input placeholder='Create new task' containerStyle={styles.input} onChangeText={handleInputChange}/>
        <Button 
          title='Add +' 
          buttonStyle={styles.createTaskButton} 
          containerStyle={{
            borderRadius: 10,
          }}
          titleStyle={{ color: 'white'}}
          onPress={handleSubmit}
        />
      </View>
      <FlatList 
        data={taskList} 
        style={styles.taskListWrapper}
        renderItem={({ item }) => (
          <TaskItem 
            key={item.key} // Ensure unique key
            item={item} 
            checked={item.completed} 
            toggleCheckbox={toggleCheckbox} 
            handleDeleteTask={handleDeleteTask}
          />
        )}
      />
      <NavBar navigateTo={navigateTo} />
    </SafeAreaView>
  );
};

export default MainScreen;
