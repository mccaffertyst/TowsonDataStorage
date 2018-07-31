import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Image, Switch } from 'react-native';
import { CheckBox } from 'react-native-elements';


export default class FormQuestion extends Component {


  render() {
    //andriod version
    if (Platform.Version === 25) {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>{this.props.question}</Text>
          <Switch 
            onValueChange = {this.props.changeParentState}
            value = {this.props.parentState}
            onTintColor = {this.props.onTintColor}
            thumbTintColor = {'white'}
          />
        </View>
      );
    }
    //ios version
    else {
        return (
          <View style={styles.container}>
            <Text style={styles.paragraph}>{this.props.question}</Text>
            <Switch 
              onValueChange = {this.props.changeParentState}
              value = {this.props.parentState}
              onTintColor = {this.props.onTintColor}
            />
          </View>
        );
      }
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    color: '#34495e',
  },
});