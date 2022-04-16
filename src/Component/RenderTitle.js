import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const RenderTitle = props => {
  return (
    <View>
      <Text style={[styles.HeaderStyle]}>{props.Title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});
