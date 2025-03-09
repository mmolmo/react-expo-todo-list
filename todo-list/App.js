import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MainScreen from './components/MainScreen';
import CompletedTasksScreen from './components/CompletedTasksScreen';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('MainScreen');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'MainScreen':
        return <MainScreen navigateTo={setCurrentScreen} />;
      case 'ProfileScreen':
        return <ProfileScreen navigateTo={setCurrentScreen} />;
      case 'CompletedTasksScreen':
        return <CompletedTasksScreen navigateTo={setCurrentScreen} />;
      default:
        return <MainScreen navigateTo={setCurrentScreen} />;
    }
  };

  return <>{renderScreen()}</>;
}
