import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Switch } from 'react-native';
import { CheckBox } from 'react-native-elements';


export default class FormResult extends Component {


    render() {
      if( this.props.hippa || this.props.PII ) {
        return (
          <View style={styles.container}>
            <Text style={styles.result}>Confidential</Text>
          </View>
        );
      }
      else if( this.props.protected1 || this.props.protected2 ) {
        return (
          <View style={styles.container}>
            <Text style={styles.result}>Protected</Text>
          </View>
        );
      }
      else {
        return (
          <View style={styles.container}>
            <Text style={styles.result}>Regular</Text>
          </View>
        );
      }
    }
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  result: {
    margin: 24,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    paddingBottom: 15,
  },
});