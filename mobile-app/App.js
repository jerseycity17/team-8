import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { dashboard, viewEmergency, viewWarning, viewInformation, viewCheckIn, viewEmergencyCall } from './views/Dashboard';
import { viewCountryBrief } from './views/SecurityBrief';

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
    title: 'Login',
  }

  submitLogin() {
    console.log('hi');
    this.setState({
      invalidLogin: true,
    });
    this.successfulLogin();
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
        { this.state.invalidLogin &&
        <FormValidationMessage
          containerStyle={{
            marginTop: -30,
          }}>Invalid Username/Password</FormValidationMessage>
        }
        <Button
          buttonStyle={{backgroundColor: 'blue', borderRadius: 10}}
          onPress={() => this.submitLogin()}
          title='Hi'
        />
      </View>
    );
  }
}


export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}

const Navigator = StackNavigator({
  ViewA: {
    screen: viewA,
  },
  ViewB: {
    screen: dashboard,
  },
  ViewEmergency: {
    screen: viewEmergency,
  },
  ViewWarning: {
    screen: viewWarning,
  },
  ViewInformation: {
    screen: viewInformation,
  },
  ViewCountryBrief: {
    screen: viewCountryBrief,
  },
  ViewCheckIn: {
    screen: viewCheckIn,
  },
  ViewEmergencyCall: {
    screen: viewEmergencyCall,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  dashboard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
});
