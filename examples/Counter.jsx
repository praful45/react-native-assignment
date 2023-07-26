import React, {useState} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import InnerCounter from './InnerCounter';
import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272f',
  },
  view: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    gap: 15,
  },
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count <= 0) {
      Alert.alert('Limit Warning', "Can't Decrease below 0");
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <View style={styles.container}>
        <InnerCounter count={count} />
        <View style={styles.view}>
          <CustomButton
            onPress={decrement}
            buttonText="DECREASE"
            bgColor="#db1d1d"
          />
          <CustomButton
            onPress={increment}
            buttonText="INCREASE"
            bgColor="#251fd1"
          />
        </View>
      </View>
    </>
  );
};

export default Counter;
