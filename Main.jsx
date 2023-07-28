import React, {useState} from 'react';
import Counter from './examples/Counter';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Scrollable from './examples/Scrollable';
import FlatListEg from './examples/FlatListEg';
import Timer from './examples/Timer';
import RandomApi from './examples/RandomApi';
import Storage from './examples/Storage';
import Home from './Home';
import HelloWorld from './examples/HelloWorld';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Info from './examples/Info';
import Login from './examples/Auth/Login';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      useLegacyImplementation={false}
      screenOptions={{headerShown: false, swipeEnabled: false}}>
      <Drawer.Screen
        name="Home"
        component={MyTab}
        options={{headerShown: true, swipeEnabled: true}}
      />
      <Drawer.Screen name="Hello World" component={HelloWorld} />
      <Drawer.Screen name="Counter" component={Counter} />
      <Drawer.Screen name="ScrollView" component={Scrollable} />
      <Drawer.Screen name="FlatList" component={FlatListEg} />
      <Drawer.Screen name="Timer" component={Timer} />
      <Drawer.Screen name="Fetch" component={RandomApi} />
      <Drawer.Screen name="AsyncStorage" component={Storage} />
    </Drawer.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MyDrawer} />
    </Stack.Navigator>
  );
};

const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#149eca',
        tabBarInactiveBackgroundColor: '#23272f',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Tab1"
        component={Home}
        options={{
          tabBarBadge: 7,
          tabBarBadgeStyle: {backgroundColor: 'red'},
          headerShown: false,
          tabBarIcon: () => <Icon name="home" color="#fff" size={24} />,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Info}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="infocirlceo" color="#fff" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <NavigationContainer>
        {isLoggedIn ? <MyStack /> : <Login setIsLoggedIn={setIsLoggedIn} />}
      </NavigationContainer>
    </>
  );
};

export default Main;
