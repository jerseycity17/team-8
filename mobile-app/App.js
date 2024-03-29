import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { CEmergencies } from './views/Emergency';

import { dashboard, viewEmergency, viewWarning, viewCheckIn, viewEmergencyCall } from './views/Dashboard';
import { viewCountryBrief } from './views/SecurityBrief';
import { viewInformation } from './views/Information';

class Login extends React.Component {
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
    navigate('ViewDashboard');
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
        { false &&
        <FormValidationMessage
          containerStyle={{
            marginTop: -30,
          }}>Invalid Username/Password</FormValidationMessage>
        }
        <Button
          buttonStyle={{backgroundColor: 'blue', borderRadius: 10}}
          onPress={() => this.submitLogin()}
          title='Login'
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
  Login: {
    screen: Login,
  },
  ViewDashboard: {
    screen: dashboard,
  },
  ViewEmergency: {
    screen: CEmergencies,
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
  },
  /*ViewEmergencyCall: {
    screen: viewNotifyAdmin,
  }*/
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dashboard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
});