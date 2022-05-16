import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import WeathersShowScreen from '../screens/WeathersShowScreen';
import WeatherDetailScreen from '../screens/WeatherDetailScreen';

const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
    return (
        <>
            <StatusBar style='auto' />
            <Stack.Navigator>
                <Stack.Screen name="WeathersShowScreen" component={WeathersShowScreen} options={{title:"Weather List"}} />
                <Stack.Screen name="WeatherDetailScreen" component={WeatherDetailScreen} options={{title:"Weather Detail"}}/>
            </Stack.Navigator>
        </>

    );
};


export default MainStackNavigator;