import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const s = StyleSheet.create({
  root: {
    padding: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default class PeopleListRow extends React.Component {

  render() {
    let { data, onpress } = this.props
    return (
      <TouchableOpacity onPress={onpress}>
        <View style={s.root}>
          <Text children={`${data.name.title} ${data.name.first} ${data.name.last}`} />
        </View>
      </TouchableOpacity>
    );
  }

};