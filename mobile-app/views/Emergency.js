import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
export class CEmergencies extends React.Component {
  static navigationOptions = {
    title: 'viewCEmergencies',
  }

  submitCheckin() {
    fetch('http://localhost:8000/user/checkin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1,
        status: 'help',

      })
    }).then(response => console.log(response));
  }
   
  render() {
    let emergencies = [];
    fetch('https://jamesw8.github.io/docs/test.json')
    .then((json) => {
      console.log(json);    
      new Promise((resolve, reject) => {
        emergencies = JSON.parse(json['_bodyText'])['found'];
      }).then(() => {
        emergencies = emergencies.map(emergency => {
          return {title: emergency['createdAt'], data: emergency['description']};
        });
      });
    });
    
    const { navigate } = this.props.navigation;
    return (
      <View>
   	    <Text>Check In</Text>
        <Button 
          raised
          onPress={() => this.submitCheckin()}
          title="CheckIn"
          color="lightblue"
        />
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
