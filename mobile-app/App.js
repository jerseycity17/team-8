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
    console.log('hi');
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


// DashBoard
class viewB extends React.Component {
  static navigationOptions = {
    title: 'viewB',
  }
  render() {  
    return (
      
      <View style={styles.container}>
        // Emergency Button
        <Button
          onPress={() => navigate('ViewEmergency')}
          title="Emergency"
          color="#ff4500"
        />
   
        // Warning Button
        <Button
          onPress={() => navigate('ViewWarning')}
          title="Warning"
          color="#ff4500"
        />
        
        // Information Button
        <Button
          onPress={() => navigate('ViewInformation')}
          title="Information"
          color="#ff4500"
        />
        
        // Country Brief Button
        <Button
          onPress={() => navigate('ViewCountryBrief')}
          title="Country Brief"
          color="#ff4500"
        />
        
        // Check In Button
        <Button
          onPress={() => navigate('ViewCheckIn')}
          title="Check In"
          color="#ff4500"
        />
        
        // Emergency Call
        <Button
          onPress={() => navigate('ViewEmergencyCall')}
          title="Emergency Call"
          color="#ff4500"
        />
      </View>
    );
  };
}


// Emergency Button on Dashboard
class viewEmergency extends React.Component {
  static navigationOptions = {
    title: 'viewEmergency',
  }
  render() {  
    return (
      <View style={styles.container}>
        <Text>viewEmergency is here</Text>
      </View>
      
    );
  };
}

// Warnings Button on Dashboard
class viewWarning extends React.Component {
  static navigationOptions = {
    title: 'viewWarning',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>viewWarning is here</Text>
      </View>
    );
  };
}

// Information Button on Dashboard
class viewInformation extends React.Component {
  static navigationOptions = {
    title: 'viewInformation',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>viewInformation is here</Text>
      </View>
    );
  };
}

// Country Brief Button on Dashboard
class viewCountryBrief extends React.Component {
  static navigationOptions = {
    title: 'viewCountryBrief',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>viewCountryBrief is here</Text>
      </View>
    );
  };
}

// CheckIn Button on Dashboard
class viewCheckIn extends React.Component {
  static navigationOptions = {
    title: 'viewCheckIn',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>viewCheckIn is here</Text>
      </View>
    );
  };
}

// Emergency Call Button on Dashboard
class viewEmergencyCall extends React.Component {
  static navigationOptions = {
    title: 'viewEmergencyCall',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>viewEmergencyCall is here</Text>
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
