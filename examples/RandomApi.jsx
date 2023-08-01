import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import {FetchData} from './utils/fetchData';

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
  text: {
    textAlign: 'center',
    padding: 10,
    flexDirection: 'column',
    color: '#fff',
  },
});

const LIMIT = 20;

const RandomApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [start, setStart] = useState(0);
  const [canFetch, setCanFetch] = useState(true);

  const getData = () => {
    try {
      setLoadingMore(true);
      setTimeout(async () => {
        const resData = await FetchData(start, LIMIT);
        if (!resData.length) {
          Alert.alert('Limit Reached', 'No More Data Left to Fetch!!');
          setCanFetch(false);
        }
        if (resData.length) {
          setData([...data, ...resData]);
        }
        setStart(start + LIMIT);
        setLoadingMore(false);
        setIsLoading(false);
      }, 500); //artificial delay
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
        <>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.dataView}>
                <Text>Id: {item.id}</Text>
                <Text>Task: {item.title}</Text>
                <Text>
                  Status: {item.completed ? 'Completed' : 'Not Completed'}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={
              loadingMore || !canFetch //either loadingMore=true or CanFetch=false will return null
                ? null
                : () => {
                    getData();
                  }
            }
            ListFooterComponent={
              loadingMore && (
                <View>
                  <ActivityIndicator />
                  <Text style={styles.text}>Loading More...</Text>
                </View>
              )
            }
          />
        </>
      )}
    </View>
  );
};

export default RandomApi;
