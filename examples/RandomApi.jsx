import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    fontSize: 45,
    fontWeight: 'bold',
    backgroundColor: '#23272f',
    padding: 10,
    justifyContent: 'center',
  },
  dataView: {
    backgroundColor: '#313847',
    margin: 5,
    padding: 10,
    color: '#fff',
    borderRadius: 8,
  },
});

const RandomApi = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    try {
      setTimeout(async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.view}>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.dataView}>
              <Text>Id: {item.id}</Text>
              <Text>Task: {item.title}</Text>
              <Text>
                Status: {item.completed ? 'Completed' : 'Not Completed'}
              </Text>
              <Text> </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default RandomApi;
