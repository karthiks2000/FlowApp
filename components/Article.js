import React, { Component } from 'react';
import { Text, View, Image, Badge } from 'react-native';
import PropTypes from 'prop-types';
import { card } from '../assets/styles/stylesheet';
import { Platform, RoundButton } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { validate } from '@babel/types';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    const data = this.props.data;
    return (
    <View style={card.articleContainer}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flex: 7, flexDirection:'column', marginLeft: 5}}>
          <Text style={{ fontSize: 16, fontWeight: '600'}}>{data.title}</Text>
          <Text style={{ fontSize: 10, fontWeight: '400'}}>{data.source.name}</Text>
        </View>
        <Image
          source={{uri: data.urlToImage}}
          style={{flex: 2, width: 70, height: 70,
          marginVertical: 10, marginLeft: 5, marginRight: 10, borderRadius: 10}} />
      </View>
    </View>
    );
  }
}