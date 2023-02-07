import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {getMoviesList} from '../../api/db';

const HomeScreen = () => {
  const [MovieItems, setMovieItems] = useState([]);

  const getMovieItems = async () => {
    const data = await getMoviesList();
    setMovieItems(data.data.data);
    console.log('veriler', data.data.data);
  };
  useEffect(() => {
    getMovieItems();
    console.log('Movie Items', MovieItems);
  }, []);
  return (
    <View style={styles.back}>
      <FlatList
        data={MovieItems}
        renderItem={({item, index}) => {
          return (
            <View>
              <View style={styles.frame}>
                <Text style={styles.text}>{item.prevuename}</Text>
                <Text style={styles.text}>{item.genre}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#1D4D5F',
  },
  text: {
    color: 'white',
  },
  frame: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 3,
    borderColor: 'black',
  },
});
