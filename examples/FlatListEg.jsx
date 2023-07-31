import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import data from './Data';
import Card from './Card';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23272f',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    flexDirection: 'column',
    color: '#fff',
  },
  view: {
    backgroundColor: '#000',
    paddingTop: 10,
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
        onEndReached={loadingMore || limit > data.length ? null : loadMore} //returns null if loadingMore=true so that loadMore will not be called
        ListFooterComponent={
          loadingMore && (
            <View style={styles.view}>
              <>
                <ActivityIndicator color="white" />
              </>
              <Text style={styles.text}>Loading More...</Text>
            </View>
          )
        }
      />
    </>
  );
};

export default FlatListEg;
