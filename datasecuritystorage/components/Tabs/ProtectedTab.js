import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';


export default class ProtectedTab extends Component {
  render() {
    return (
      <ScrollView>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Storage Option 1</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Discription for storage option 1 Discription for storage
                  option 1 Discription for storage option 1 Discription for
                  storage option 1
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text>Storage Option 2</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Discription for Storage Option 2 Discription for Storage
                  Option 2 Discription for Storage Option 2 Discription for
                  Storage Option 2
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        <Button title="Need Help? Contact IT" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 24,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#34495e',
  },
});
