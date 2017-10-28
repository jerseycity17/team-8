import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
// DashBoard
export class viewB extends React.Component {
  static navigationOptions = {
    title: 'viewB',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.dashboard}>
        <Button
          onPress={() => navigate('ViewEmergency')}
          title="Emergency"
          buttonStyle={{backgroundColor: 'red', borderRadius: 20, height: 75}}
        />
   

        <Button
          onPress={() => navigate('ViewWarning')}
          title="Warning"
          buttonStyle={{backgroundColor: 'orange', borderRadius: 20, height: 75}}
        />
        

        <Button
          onPress={() => navigate('ViewInformation')}
          title="Information"
          buttonStyle={{backgroundColor: 'indigo', borderRadius: 20, height: 75}}
        />
        

        <Button
          onPress={() => navigate('ViewCountryBrief')}
          title="Country Brief"
          buttonStyle={{backgroundColor: 'green', borderRadius: 20, height: 75}}
        />
        

        <Button
          onPress={() => navigate('ViewCheckIn')}
          title="Check In"
          buttonStyle={{backgroundColor: 'blue', borderRadius: 20, height: 75}}
        />
        

        <Button
          onPress={() => navigate('ViewEmergencyCall')}
          title="Emergency Call"
          buttonStyle={{backgroundColor: 'red', borderRadius: 20, height: 75}}
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
  
  constructor(props) {
    super(props);
    this.state = {
      title: "Some Sample Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.securitybriefHeader}>
          {this.state.title}
        </Text>
        <ScrollView>
          <Text style={styles.securitybriefBody}>
            {this.state.body}
          </Text>
        </ScrollView>
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
  dashboard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  securitybriefHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  securitybriefBody: {
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
  },
  
});