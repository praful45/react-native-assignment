import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'space-evenly',
    justifyContent: 'space-evenly',
    backgroundColor: '#23272f',
    padding: 50,
  },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        color="#149eca"
        title="Hello World Example"
        onPress={() => navigation.navigate('Hello World')}
      />
      <Button
        color="#149eca"
        title="Counter Example"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        color="#149eca"
        title="ScrollView Example"
        onPress={() => navigation.navigate('ScrollView')}
      />
      <Button
        color="#149eca"
        title="Flat List Example"
        onPress={() => navigation.navigate('FlatList')}
      />
      <Button
        color="#149eca"
        title="Timer Example"
        onPress={() => navigation.navigate('Timer')}
      />
      <Button
        color="#149eca"
        title="Fetch Example"
        onPress={() => navigation.navigate('Fetch')}
      />
      <Button
        color="#149eca"
        title="Storage Example"
        onPress={() => navigation.navigate('AsyncStorage')}
      />
    </View>
  );
};

export default Home;
