import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import FormQuestion from '../FormQuestion.js';
import FormResult from '../FormResult';

export default class Form extends Component {
  state = {
    switchValueHippa: false,
    switchValuePII: false,
    switchValueProtected1: false,
  };

  _handleToggleSwitchHippa = () =>
    this.setState(state => ({
      switchValueHippa: !state.switchValueHippa,
    }));

  _handleToggleSwitchPII = () =>
    this.setState(state => ({
      switchValuePII: !state.switchValuePII,
    }));

  _handleToggleSwitchProtected1 = () =>
    this.setState(state => ({
      switchValueProtected1: !state.switchValueProtected1,
    }));

  _handleToggleSwitchProtected2 = () =>
    this.setState(state => ({
      switchValueProtected2: !state.switchValueProtected2,
    }));

  render() {
    return (
      <View styles={styles.container}>

        <Text style={styles.title}>
          Security Classification Calculator Mark all that apply:
        </Text>
        
        <FormQuestion
          question="HIPPA"
          changeParentState={this._handleToggleSwitchHippa}
          parentState={this.state.switchValueHippa}
          onTintColor="red"
        />
        <FormQuestion
          question="Personal Identifiable Information"
          changeParentState={this._handleToggleSwitchPII}
          parentState={this.state.switchValuePII}
          onTintColor="red"
        />
        <FormQuestion
          question="Protected 1"
          changeParentState={this._handleToggleSwitchProtected1}
          parentState={this.state.switchValueProtected1}
          onTintColor="gold"
        />
        <FormQuestion
          question="Protected 2"
          changeParentState={this._handleToggleSwitchProtected2}
          parentState={this.state.switchValueProtected2}
          onTintColor="gold"
        />
        <FormQuestion question="extra" />
        <FormQuestion question="extra" />

        <FormResult
          hippa={this.state.switchValueHippa}
          PII={this.state.switchValuePII}
          protected1={this.state.switchValueProtected1}
          protected2={this.state.switchValueProtected2}
        />

        <Button title="Need Help? Contact IT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 24,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#34495e',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
