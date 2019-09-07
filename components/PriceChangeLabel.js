import React, { Component } from 'react';
import { RoundButton } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class PriceChangeLabel extends Component {

    constructor(props) {
        super(props);
    }

	render() {
		return (
            <RoundButton color={this.props.status}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name={this.props.arrow} size={5} color={'white'} />
                    <Text style={{ textAlign: 'center', color: 'white' }}>{this.props.change}</Text>
                </View>
            </RoundButton>
        );
	}
}
