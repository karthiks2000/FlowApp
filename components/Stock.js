import React, { Component } from 'react';
import { Text, View, Image, Badge } from 'react-native';
import PropTypes from 'prop-types';
import { card } from '../assets/styles/stylesheet';
import { Platform, RoundButton } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { validate } from '@babel/types';

export default class Stock extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const datum = this.props.datum;
        return (
                <View style={card.stockContainer}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flex: 7, flexDirection:'column', marginLeft: 5}}>
                <Text style={{ fontSize: 28, fontWeight: '600'}}>{datum["symbol"]}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400'}}>Open: {datum["openPrice"]}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400'}}>High: {datum["highPrice"]}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400'}}>Low: {datum["lowPrice"]}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400'}}>Close: {datum["closePrice"]}</Text>
                </View>
                </View>
                </View>
                );
    }
}