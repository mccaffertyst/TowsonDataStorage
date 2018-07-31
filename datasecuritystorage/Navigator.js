//React Imports
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
//screen routing
import { StackNavigator } from 'react-navigation';

//local imports
import navStyles from './Styles/NavStyles';
import Form from './components/Tabs/Form.js';
import Contacts from './components/ContactScreen';
import ConfidentialTab from './components/Tabs/ConfidentialTab';
import ProtectedTab from './components/Tabs/ProtectedTab';
//homepage render
class Home extends React.Component {
    

  static navigationOptions = {
    title: 'Towson Data Storage Security',
    ...navStyles,
  };



  // goToSubMenu = () => {
  //   this.props.navigation.navigate("SubMenu");
  // };

  render() {
    return (
      <Container>
        <Tabs tabBarPosition="bottom" initialPage={1}>
          <Tab
            heading="Confidential"
            activeTabStyle={{ backgroundColor: 'gold' }}
            activeTextStyle={{ color: '#000' }}
            tabStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'gold', fontWeight: 'bold' }}>
            <ConfidentialTab {...this.props} />
          </Tab>

          <Tab
            heading="Form"
            activeTabStyle={{ backgroundColor: 'gold' }}
            activeTextStyle={{ color: '#000' }}
            tabStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'gold', fontWeight: 'bold' }}>
            <Form {...this.props} />
          </Tab>

          <Tab
            heading="Protected"
            tabStyle={{ backgroundColor: 'black' }}
            activeTextStyle={{ color: '#000' }}
            activeTabStyle={{ backgroundColor: 'gold' }}
            textStyle={{ color: 'gold', fontWeight: 'bold' }}>
            <ProtectedTab {...this.props} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Contacts: {
    screen: Contacts,
  },
});
