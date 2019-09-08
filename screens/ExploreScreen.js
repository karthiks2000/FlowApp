import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput, Image, Platform,
    ScrollView, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native';
import { primary } from '../assets/styles/stylesheet';
import Article from '../components/Article';
import Stock from '../components/Stock';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';

const { height, width } = Dimensions.get('window')

export default class HomeScr extends Component {
    
    static navigationOptions = {
    header: null,
    };
    
    constructor(props) {
        super(props);
        this.state = {
        articles: []
        };
    }
    
    componentWillMount() {
        this.startHeaderHeight = 65
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
        this.getArticles(this.props.default);
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            //this.setState({ url: `https://newsapi.org/v2/top-headlines?sources=${nextProps.default}&apiKey=${process.env.REACT_APP_API_KEY}` });
            this.setState({ url: `https://api.tdameritrade.com/v1/marketdata/quotes?apikey=YIJHN1VHR4T2AKMDLGFGSLYBKBBESWEI&symbol=FB%2CAAPL%2CAMZN%2CGOOGL%2CNFLX%2CSPY%2CQQQ%2CIWM` });
                          this.getArticles(nextProps.default);
                          }
                          }
                          
                          getArticles(url) {
                          //const apiKey = process.env.REACT_APP_API_KEY;
                          const apiKey = '7091129cf7f44cb2ae533fe602082582'
                          // Make HTTP reques with Axios
                          axios
                          .get(`https://api.tdameritrade.com/v1/marketdata/quotes?apikey=YIJHN1VHR4T2AKMDLGFGSLYBKBBESWEI&symbol=FB%2CAAPL%2CAMZN%2CGOOGL%2CNFLX%2CSPY%2CQQQ%2CIWM`)
                               .then(res => {
                                     const articles = Object.entries(res.data);
                                     console.log(articles);
                                     // Set state with result
                                     this.setState({ articles: articles });
                                     })
                               .catch(error => {
                                      console.log(error);
                                      });
                               }
                               
                               render() {
                               return (
                                       <View>
                                       <Text style={{ fontSize: 34, fontWeight: '700', paddingHorizontal: 20,
                                       marginTop: Platform.OS == 'android' ? 60 : 30}}>Latest News</Text>
                                       <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 0}}>
                                       <View style={{
                                       flexDirection: 'row', padding: 10,
                                       backgroundColor: 'white', marginHorizontal: 20,
                                       shadowOffset: { width: 0, height: 0 },
                                       shadowColor: 'black',
                                       shadowOpacity: 0.2,
                                       elevation: 1,
                                       marginTop: 15,
                                       borderRadius: 10
                                       }}>
                                       <Icon name="ios-search" size={15} style={{ marginRight: 10}} />
                                       <TextInput
                                       underlineColorAndroid="transparent"
                                       placeholder="Find a Stock..."
                                       placeholderTextColor="grey"
                                       style={{ flex: 1, fontWeight: '100', backgroundColor: 'white'}}/>
                                       </View>
                                       </View>
                                       <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                                       <View>
                                       <Stock datum={this.state.articles}/>
                                       </View>
                                       </ScrollView>
                                       </View>
                                       );
                               }
                               }
