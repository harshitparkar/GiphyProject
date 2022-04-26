import React, {} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';

export const RenderImage = (props) => {
  return (
    <View>
      <FastImage
        resizeMode="contain"
        style={styles.image}
        source={{uri: props.LinkImage}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width/2,
    height: 150,
    borderWidth: 1,
    marginBottom: 5,
    marginHorizontal:5
  },
});
