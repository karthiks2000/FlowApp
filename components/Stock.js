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
                <Text style={{ fontSize: 24, fontWeight: '600'}}>{datum[0][44]}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400'}}>Open: {datum[0][44]}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400'}}>High: {datum[0][44]}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400'}}>Low: {datum[0][44]}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400'}}>Close: {datum[0][44]}</Text>
                </View>
                </View>
                </View>
                );
    }
}
