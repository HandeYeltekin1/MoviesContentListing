import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getMoviesList} from '../../api/db';

const HomeScreen = ({navigation}) => {
  const [MovieItems, setMovieItems] = useState([]);
  const [startTime, setStartTime] = useState([]);
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
          setStartTime(item.utcbegintime);
          return (
            <View style={styles.back}>
              <View style={styles.frame}>
                <Text style={styles.text}>{item.prevuename}</Text>
                <View style={styles.clock}>
                  <Text style={styles.text2}>{item.genre}</Text>
                  <Text style={styles.text3}>
                    {item.utcbegintime.substr(11, 5)} --
                    {item.utcendtime.substr(11, 5)}
                  </Text>
                  {/* <Text>{item.prevuecode}</Text> */}
                  <TouchableOpacity
                    style={styles.buttonlocation}
                    onPress={() => {
                      console.log('deneme', item.prevuecode);
                      // navigation.navigate("Edit", { id: navigation.getParam("id") })
                      navigation.navigate('Detail', {
                        prevuecode: item.prevuecode,
                      });
                    }}>
                    <Text style={styles.button}>i</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
// 11,8

export default HomeScreen;

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#003A59',
  },
  buttonlocation: {
    marginVertical: 1,
    marginHorizontal: 180,
  },
  text: {
    color: 'white',
    paddingStart: 10,
  },
  text2: {
    color: 'white',
    paddingTop: 20,
    paddingStart: 10,
  },
  text3: {
    color: '#81878C',
    paddingTop: 20,
    paddingStart: 10,
  },
  clock: {
    flexDirection: 'row',
  },
  button: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
  frame: {
    backgroundColor: '#002940',
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#81878C',
    height: 75,
    width: 370,
    left: 10,
    paddingTop: 10,
    marginTop: 5,
    // marginStart: 20,
  },
});
