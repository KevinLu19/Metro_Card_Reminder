import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Mainscreen from "./screens/MainScreen";
import AddBalance from "./screens/AddBalance";
import About from "./screens/About";

function HomeScreen()
{
  return (
    <SafeAreaView>
      <Mainscreen />
    </SafeAreaView>
  );
}

function AddBalanceScreen()
{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddBalance />
    </View>
  );
}

function AboutScreen()
{
  return (
    <SafeAreaView>
      <About />
    </SafeAreaView>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs()
{
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Add Balance" component={AddBalanceScreen}/>
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}