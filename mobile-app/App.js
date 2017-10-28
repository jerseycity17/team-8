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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
