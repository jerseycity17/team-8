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
    fetch('http://localhost:8000/user/Broadcast/1/emergency')
    .then((json) => {
      console.log(json);    
      new Promise((resolve, reject) => {
        resolve(JSON.parse(json['_bodyText'])['found']);
      }).then(() => {
        new Promise((resolve, reject) => {
          resolve(emergencies.map(emergency => {
            return {title: emergency['createdAt'], data: emergency['description']};
          }));
        }).then(() => console.log('o',emergencies));
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
