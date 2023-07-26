import React from 'react';
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

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      useLegacyImplementation={false}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
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

const Main = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Main;