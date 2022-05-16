import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigators/MainStackNavigator';

I18nManager.allowRTL(false);


const App = (props) => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </>
  );
}


export default App;
