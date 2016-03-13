'use strict';

import React, {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
  TabBarIOS
} from 'react-native';

const SearchResults = require('./SearchResults');

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
      key:'dc832c7469a84b07aa6e0bffdea3bba6',
      type:'beer',
      p: pageNumber
  };
  data[key] = value;
 
  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');
  console.log(querystring);
 
  return 'http://api.brewerydb.com/v2/search?' + querystring;
};

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'delirium',
      isLoading: false,
      message: ''
    };
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json))
      .catch(error => 
         this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
    }));
  }

  _handleResponse(response) {
    console.log(response);
    this.setState({ isLoading: false , message: '' });
    if (response.data != undefined) {
      this.props.navigator.push({
        title: 'Resultados',
        component: SearchResults,
        passProps: {beers: response.data}
      });
    } else {
      this.setState({ message: 'No se encontró'});
    }
  }
   
  onSearchPressed() {
    var query = urlForQueryAndPage('q', this.state.searchString, 1);
    this._executeQuery(query);
  }

  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }
  render() {
    var spinner = this.state.isLoading ?
    ( <ActivityIndicatorIOS
        hidden='true'
        size='large'/> ) :
    ( <View/>);
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for beers!
        </Text>
        <Text style={styles.description}>
          Search by name, brand or type.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via name or type'/>
          <TouchableHighlight 
              style={styles.button}
              underlayColor='#99d9f4'
              onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText} >Go</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image
          style={styles.image}
          source={require('image!beerapp')}
        />
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    color: '#48BBEC'
  },
    image: {
    width: 217,
    height: 128
  }
});

module.exports = SearchPage;