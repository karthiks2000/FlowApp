import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput, Image, Platform,
    ScrollView, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native';
import { primary } from '../assets/styles/stylesheet';
import Article from '../components/Article';
import Stock from '../components/Stock';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import Papa from 'papaparse';

const { height, width } = Dimensions.get('window')

export default class HomeScr extends Component {
    
    static navigationOptions = {
    header: null,
    };
    
    constructor(props) {
        super(props);
        this.state = {
        articles1: [], articles2: [], articles3: [], articles4: [], articles5: []
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
            this.setState({ url: `https://api.tdameritrade.com/v1/marketdata/quotes?apikey=YIJHN1VHR4T2AKMDLGFGSLYBKBBESWEI&symbol=FB%2CAAPL%2CAMZN%2CGOOGL%2CNFLX` });
                          this.getArticles1(nextProps.default);
                          }
                          }
                          
                          getArticles(url) {
                          //const apiKey = process.env.REACT_APP_API_KEY;
                          const apiKey = '7091129cf7f44cb2ae533fe602082582'
                          // Make HTTP reques with Axios
                          axios
                          .get(`https://api.tdameritrade.com/v1/marketdata/quotes?apikey=YIJHN1VHR4T2AKMDLGFGSLYBKBBESWEI&symbol=FB%2CAAPL%2CAMZN%2CGOOGL%2CNFLX`)
                               .then(res => {
                                     const articles1 = res.data.FB;
                                     const articles2 = res.data.AAPL;
                                     const articles3 = res.data.AMZN;
                                     const articles4 = res.data.NFLX;
                                     const articles5 = res.data.GOOGL;
                                     // Set state with result
                                     console.log(articles1);
                                     this.setState({ articles1: articles1 });
                                     this.setState({ articles2: articles2 });
                                     this.setState({ articles3: articles3 });
                                     this.setState({ articles4: articles4 });
                                     this.setState({ articles5: articles5 });
                                     })
                               .catch(error => {
                                      console.log(error);
                                      });
                               }
                               
                               render() {
                               return (
                                       <View>
                                       <Text style={{ fontSize: 34, fontWeight: '700', paddingHorizontal: 20,
                                       marginTop: Platform.OS == 'android' ? 60 : 30}}>Explore</Text>
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
                                       <ScrollView scrollEventThrottle={4} horizontal={true}>
                                       <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20,
                                       marginTop: 5, marginBottom: 20}}>FAANG Stocks</Text>
                                       <Stock datum={this.state.articles1}/>
                                       <Stock datum={this.state.articles2}/>
                                       <Stock datum={this.state.articles3}/>
                                       <Stock datum={this.state.articles4}/>
                                       <Stock datum={this.state.articles5}/>
                                       </ScrollView>
                                       </View>
                                       );
                               }
                               }