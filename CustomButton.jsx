import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '50%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

const CustomButton = ({onPress, buttonText, bgColor = '#000'}) => {
  return (
    <Pressable
      style={[styles.button, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;
