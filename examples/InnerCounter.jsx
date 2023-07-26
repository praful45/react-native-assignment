import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#23272f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#05fa0d',
  },
});

const InnerCounter = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

export default InnerCounter;
