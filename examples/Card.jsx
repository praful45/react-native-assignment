import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 20,
    backgroundColor: '#313847',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
    borderRadius: 5,
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 10,
    textAlign: 'left',
  },
});

const Card = ({heading, title, source, description}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Image source={{uri: source}} style={styles.image} />
        <Text style={styles.text}>{description}</Text>
      </View>
    </>
  );
};

export default Card;
