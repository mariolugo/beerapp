'use strict';

import React, {
  StyleSheet,
  Image, 
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component,
  Dimensions,
  requireNativeComponent,
  processColor
} from 'react-native';

let LinearGradient = require('./node_modules/react-native-linear-gradient/');
const BeerView = require('./BeerView');

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;


class SearchResults extends Component {
  rowPressed(propertyGuid) {
    console.log(propertyGuid);
    var beer = this.props.beers.filter(prop => prop.id === propertyGuid)[0];
   
    this.props.navigator.push({
      title: "Property",
      component: BeerView,
      passProps: {beer: beer}
    });
  }
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.id !== r2.id});
    var beersWithImg = []; 
    for (let i = 0; i < this.props.beers.length; i++){
      console.log(this.props.beers[i]);
      if (this.props.beers[i].labels != undefined) {
        beersWithImg.push(this.props.beers[i]);
      }
    }

    this.state = {
      dataSource: dataSource.cloneWithRows(beersWithImg)
    };
    console.log(this.state.dataSource);
  }
 
  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
          onPress={() => this.rowPressed(rowData.id)}
          underlayColor='#dddddd'>
        <View >
            <Image 
              style={styles.thumb} 
              source={{ uri: rowData.labels.medium }} />
              <View  style={styles.textContainer}>
            <Text style={styles.price}>{rowData.abv}%</Text>
            <Text style={styles.title} 
                  numberOfLines={1}>{rowData.name}</Text>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
 
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
 
}

const styles = StyleSheet.create({
  thumb: {
    height:380,
    width: width
  },
  textContainer: {
    flex: 1,
    position:'absolute',
    bottom:0,
    left: 0,
    backgroundColor: 'rgba(133,133,133,0.4)',
    width:width,
    padding:5
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    position: 'relative',
    left:5
  },
  title: {
    fontSize: 25,
    color: '#fff',
    position: 'relative',
    left:5
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  linearGradient: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

module.exports = SearchResults;