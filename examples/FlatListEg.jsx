import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import data from './Data';
import Card from './Card';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23272f',
  },
  btn: {
    backgroundColor: '#03fcba',
  },
  btnTxt: {
    color: '#000',
  },
  text: {
    color: '#000',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#f24e4e',
  },
});

const FlatListEg = () => {
  const [limit, setLimit] = useState(5);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadMore = () => {
    if (limit > data.length) {
      return;
    }
    setLoadingMore(true);
    setTimeout(() => {
      setLimit(c => c + 5);
      setLoadingMore(false);
    }, 1100);
  };
  return (
    <>
      <FlatList
        style={styles.container}
        data={data.slice(0, limit)}
        renderItem={({item}) => (
          <Card
            title={item.title}
            source={item.src}
            description={item.description}
          />
        )}
        keyExtractor={item => item.key}
        onEndReachedThreshold={0.5}
        onEndReached={loadingMore || limit > data.length ? null : loadMore}
        ListFooterComponent={
          loadingMore && <Text style={styles.text}>Loading More...</Text>
        }
      />
    </>
  );
};

export default FlatListEg;
