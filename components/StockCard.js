import React, { Component } from 'react';
import { Text, View, Image, Badge } from 'react-native';
import PropTypes from 'prop-types';
import { card } from '../assets/styles/stylesheet';
import { Platform, RoundButton } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { validate } from '@babel/types';
import { PriceChangeLabel } from './PriceChangeLabel';

export default class StockCard extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    const data = this.props.data;
    const textColor = data.status;
    return (
    <View style={card.stockContainer}>
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 20, fontWeight: '600', paddingHorizontal: 0, 
                  marginTop: 10, marginLeft: 10, marginBottom: 20 }}>{data.name}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 10, color: data.status, marginLeft: 10 }}>{data.fullName}</Text>
                <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start', marginTop: 10, marginStart: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', paddingHorizontal: 0, color: textColor }}>{data.change}</Text>
                    <Text style={{fontSize: 15, fontWeight: '400', paddingHorizontal: 10}}>{data.price}</Text>
                </View>
            </View>
        </View>
    </View>
    );
  }
}