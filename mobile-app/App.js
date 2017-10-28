import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

class viewA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      invalidLogin: false,
    };
  }
  
  static navigationOptions = {
    title: 'viewA',
  }

  submitLogin() {
    this.setState({
      invalidLogin: true,
    });
  }

  successfulLogin() {
    const { navigate } = this.props.navigation;
    navigate('ViewB');
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel
          containerStyle={{
            marginTop: 150,
          }}
        >USERNAME</FormLabel>
        <FormInput
          autoCapitalize={'none'}
          autoCorrect={false}
          maxLength={16}
          width={300}
          onChangeText={(username) => this.setState({username})}
        />
        <FormLabel>PASSWORD</FormLabel>
        <FormInput
          containerStyle={{
            marginBottom: 35,
          }}
          secureTextEntry={true}
          maxLength={16}
          onChangeText={(password) => this.setState({password})}
        />
        { this.invalidLogin &&
        <FormValidationMessage
          containerStyle={{
            marginTop: -30,
          }}>Invalid Username/Password</FormValidationMessage>
        }
        <Button
          buttonStyle={{backgroundColor: 'blue', borderRadius: 10}}
          onPress={() => this.submitLogin.bind(this)}
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
