import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

export const RenderHeader = props => {
  return (
    <View>
      <Image
        source={require('../../assets/BrandLogo.png')}
        style={[styles.image]}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Text style={[styles.textStyle, {borderBottomColor: '#2f9dff'}]}>
          Reactions
        </Text>
        <Text style={[styles.textStyle, {borderBottomColor: '#6567ff'}]}>
          Entertainment
        </Text>
        <Text style={[styles.textStyle, {borderBottomColor: '#7f4dff'}]}>
          Sports
        </Text>
        <Text style={[styles.textStyle, {borderBottomColor: '#ae38eb'}]}>
          Stickers
        </Text>
        <Text style={[styles.textStyle, {borderBottomColor: '#cc40cf'}]}>
          Artists
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    alignSelf:'center',
    margin:10,
    height:30,
    width:120,
  },
  textStyle: {
    width: Dimensions.get('screen').width / 5.5,
    fontSize: 10,
    color: 'white',
    fontWeight: '700',
    borderBottomWidth: 5,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 5,
  },
});
