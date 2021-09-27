import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import Home from './src/pages/home/home';
import List from './src/pages/list/list';
//import Web from './src/pages/webView/webView'


//console.disableYellowBox(true);

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="List" component={List}/>      
     </Stack.Navigator>
   </NavigationContainer>
  );
}


