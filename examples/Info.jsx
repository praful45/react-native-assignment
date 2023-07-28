import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#23272f',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    borderColor: '#17f702',
    color: '#17f702',
    borderWidth: 2,
    padding: 10,
    borderRadius: 12,
  },
});

const Info = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Info Tab</Text>
    </View>
  );
};

export default Info;
