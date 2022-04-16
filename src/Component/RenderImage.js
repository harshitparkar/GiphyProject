import React, {} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

export const RenderImage = (props) => {
  return (
    <View>
      <Image
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
