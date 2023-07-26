import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272f',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 15,
  },
  output: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 50,
  },
});

const Storage = () => {
  const [data, setData] = useState();
  const [accessData, setAccessData] = useState();

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('user', value);
      Alert.alert('Success', 'Data Stored Successfully');
      setData('');
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      setAccessData(value);
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('user');
      Alert.alert('Success', 'Data Removed Successfully');
      setAccessData('');
    } catch (error) {
      //handle error
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your data to store"
        placeholderTextColor="#cbd1cb"
        style={styles.input}
        value={data}
        onChangeText={text => setData(text)}
      />
      {/* for now adding empty text for creaating gap */}
      <Text />
      <Button
        title="Store Input Data"
        onPress={
          data
            ? () => storeData(data)
            : () => {
                Alert.alert('Warning', 'Please Provide Data to Store');
              }
        }
        color="#149eca"
      />
      <Text />
      <Button title="Retrieve Stored Data" onPress={getData} color="#149eca" />
      <Text />
      <Button
        title="Remove Stored Data"
        onPress={
          accessData
            ? removeData
            : () => {
                Alert.alert('Warning', 'No Data Available to Delete');
              }
        }
        color="#149eca"
      />
      <Text style={styles.output}>
        Data from storage: {accessData ? accessData : 'NO DATA AVAILABLE'}
      </Text>
    </View>
  );
};

export default Storage;
