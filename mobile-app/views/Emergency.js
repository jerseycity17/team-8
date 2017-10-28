// Emergency
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
export class CEmergencies extends React.Component {
  static navigationOptions = {
    title: 'viewCEmergencies',
  }
  render() {
    var emergencies = [];
    fetch('https://www.google.com')
    .then((response) => {
      response.json();
    })
    .then((json) => {
      console.log(json);
      emergencies = json['found']
    }).then(() => {
      emergencies = emergencies.map((emergency) => {
        let obj = {
          title: emergency['createdAt'], 
          data: emergency['description']
        };
        return obj;
      });
    }).catch((e) => console.log(e));
    const { navigate } = this.props.navigation;
    return (
      <View>
   	    <Text>Check In</Text>
        <Button
          onPress={() => navigate('viewB')}
          title="Good"
          color="#00ff00"
        />
        <Button
          onPress={() => navigate('viewEmergencyCall'), navigate('viewNotifyAdmin')}
          title="Help"
          color="#ff0000"
        />
      </View>
    );
  }
}
class viewEmergencyCall extends React.Component {
		static navigationOptions = {
			title: 'viewEmergencyCall',
		}
	render() {
	    return (
	    <View></View>     
   	    );
	};
}

class viewNotifyAdmin extends React.Component {
		static navigationOptions = {
			title: 'viewNotifyAdmin',
		}
	render() {
	    return (
	     <View></View>
	    );
	};
}
