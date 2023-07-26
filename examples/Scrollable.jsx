import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Card from './Card';
import data from './Data';
import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23272f',
  },
});

const Scrollable = () => {
  const [limit, setLimit] = useState(5);
  const loadMore = () => {
    setLimit(c => c + 5);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        {data.map(
          (item, index) =>
            index < limit && (
              <Card
                key={item.key}
                heading="Flat List"
                title={item.title}
                source={item.src}
                description={item.description}
              />
            ),
        )}

        {!(limit > data.length) && (
          <CustomButton buttonText="Load More..." onPress={loadMore} />
        )}
      </ScrollView>
    </>
  );
};

export default Scrollable;
