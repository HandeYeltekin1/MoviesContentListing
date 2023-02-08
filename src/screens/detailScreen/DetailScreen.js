import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {getMovieDetails} from '../../api/db';

const DetailScreen = ({navigation}) => {
  const detail = useRef([]);
  const [details, setDetails] = useState([]);
  const prevuecodes = navigation.getParam('prevuecode');
  console.log('Param', prevuecodes);
  const getMovieDetail = async () => {
    const data = await getMovieDetails(prevuecodes);
    console.log('selam', data.data);
    setDetails(data.data);
    console.log('detay', details);
    detail.current = detail.current + data.data;
    console.log('detail ', detail.current);
    // console.log(
    //   'detail',
    //   detail.current.map(data => {
    //     data.columncode;
    //   }),
    // );
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <View style={styles.back}>
      <Text> {detail.description}</Text>
      {/* <Text>Detail Screen</Text> */}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#003A59',
  },
});
