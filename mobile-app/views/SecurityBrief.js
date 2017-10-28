import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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


const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  // alignItems: 'center',
  // justifyContent: 'center',
  },
  securitybriefHeader: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 25,
  color: 'green',
  },
  securitybriefBody: {
  textAlign: 'center',
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
  fontSize: 20,
  },
});