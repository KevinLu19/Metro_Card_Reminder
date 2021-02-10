import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Mainscreen from "./screens/MainScreen";
import AddBalance from "./screens/AddBalance";
import About from "./screens/About";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer()
{
  return (
    <Drawer.Navigator initialRouteName={"Home"}>
      <Drawer.Screen name = "Add Balance" component={AddBalance} />
      <Drawer.Screen name = "Home" component = {Mainscreen} />
      <Drawer.Screen name = "About This App" component={About} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaView>
      <Mainscreen />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen name="Home" children={MyDrawer} />
          <Stack.Screen name="Add Balance" children={AddBalance} />
          <Stack.Screen name="About" children={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
