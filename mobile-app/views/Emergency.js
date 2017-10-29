import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
export class CEmergencies extends React.Component {
  static navigationOptions = {
    title: 'viewCEmergencies',
  }

  submitGood() {
    fetch('http://localhost:8000/user/checkin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1,
        status: 'good',

      })
    }).then(response => console.log(response));
  }
 submitHelp() {
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
    fetch('http://localhost:8000/user/Broadcasts/?userId=1&type=emergency')
    .then((json) => {
      console.log(json);    
      new Promise((resolve, reject) => {
        emergencies = JSON.parse(json['_bodyText'])['found'];
      }).then(() => {
            return {title: emergencies[0]['createdAt'], data: emergency[0]['description']};
      });
    });
    
    const { navigate } = this.props.navigation;
    return (
      <View>
      
   	    <Text>Check In</Text>
        <Button 
          raised
          onPress={() => this.submitGood()}
          title="I'm good!"
          color="lightblue"
        />
        <Button 
          raised
          onPress={() => this.submitHelp()}
          title="Help me!"
          color="red"
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
