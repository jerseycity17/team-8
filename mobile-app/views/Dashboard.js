import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
// DashBoard
export class viewB extends React.Component {
  static navigationOptions = {
    title: 'viewB',
  }
  render() {  
    return (
      
      <View style={styles.container}>
        <Button
          onPress={() => navigate('ViewEmergency')}
          title="Emergency"
          buttonStyle={{backgroundColor: 'red', borderRadius: 20}}
        />
   

        <Button
          onPress={() => navigate('ViewWarning')}
          title="Warning"
          buttonStyle={{backgroundColor: 'orange', borderRadius: 20}}
        />
        

        <Button
          onPress={() => navigate('ViewInformation')}
          title="Information"
          buttonStyle={{backgroundColor: 'indigo', borderRadius: 20}}
        />
        

        <Button
          onPress={() => navigate('ViewCountryBrief')}
          title="Country Brief"
          buttonStyle={{backgroundColor: 'green', borderRadius: 20}}
        />
        

        <Button
          onPress={() => navigate('ViewCheckIn')}
          title="Check In"
          buttonStyle={{backgroundColor: 'blue', borderRadius: 20}}
        />
        

        <Button
          onPress={() => navigate('ViewEmergencyCall')}
          title="Emergency Call"
          buttonStyle={{backgroundColor: 'red', borderRadius: 20}}
        />
      </View>
    );
  };
}


// Emergency Button on Dashboard
export class viewEmergency extends React.Component {
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
export class viewWarning extends React.Component {
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
export class viewInformation extends React.Component {
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
export class viewCountryBrief extends React.Component {
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
export class viewCheckIn extends React.Component {
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
export class viewEmergencyCall extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});