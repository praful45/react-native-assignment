import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#23272f',
  },
  Text: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#17f702',
  },
});

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>{count}</Text>
    </View>
  );
};

export default Timer;
