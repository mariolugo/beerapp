'use strict';

import React, {
  StyleSheet,
  Image, 
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} from 'react-native';

class BeerView extends Component {
  
  render() {
    console.log(this.props.beer);
    const beer = this.props.beer;
 
    return (
      <View style={styles.container}>
        <Image style={styles.image} 
            source={{uri: beer.labels.medium}} />
        <View style={styles.heading}>
          <Text style={styles.price}>{beer.name}</Text>
          <Text style={styles.title}>{beer.style.shortName}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{beer.abv} % alcohol</Text>
        <Text style={styles.description}>{beer.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

module.exports = BeerView;

