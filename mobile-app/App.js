import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

class viewA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  
  static navigationOptions = {
    title: 'viewA',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>viewA is here</Text>
        <FormLabel>Username</FormLabel>
        <FormInput
          autoCapitalize={'none'}
          autoCorrect={false}
          // maxLength=
          onChangeText={(username) => this.setState({username})}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          buttonStyle={{backgroundColor: 'blue', borderRadius: 10}}
          onPress={() => navigate('ViewB')}
          title='Hi'
        />
      </View>
    );
  }
}

class viewB extends React.Component {
  static navigationOptions = {
    title: 'viewB',
  }
  render() {  
    return (
      <View style={styles.container}>
        <Text>viewB is here</Text>
      </View>
    );
  };
}

const Navigator = StackNavigator({
  ViewA: {
    screen: viewA,
  },
  ViewB: {
    screen: viewB,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
