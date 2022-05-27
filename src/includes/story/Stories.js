import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Story from 'react-native-story';
import Home from '../Home_screen/Home';

const Stories = ({navigation}) => {
  const stories = [
    {
      id: '4',
      source: require('../../images/waterfall.jpeg'),
      user: 'Ugur Erdal',
      avatar: require('../../images/waterfall.jpeg'),
    },
    {
      id: '2',
      source: require('../../images/waterfall.jpeg'),
      user: 'Mustafa',
      avatar: require('../../images/waterfall.jpeg'),
    },
    {
      id: '6',
      source: require('../../images/waterfall.jpeg'),
      user: 'Emre Yilmaz',
      avatar: require('../../images/waterfall.jpeg'),
    },
    {
      id: '3',
      source: require('../../images/waterfall.jpeg'),
      user: 'Cenk Gun',
      avatar: require('../../images/waterfall.jpeg'),
    },
    {
      id: '5',
      source: require('../../images/waterfall.jpeg'),
      user: 'Cenk Gun',
      avatar: require('../../images/waterfall.jpeg'),
    },
    {
      id: '7',
      source: require('../../images/waterfall.jpeg'),
      user: 'Cenk Gun',
      avatar: require('../../images/waterfall.jpeg'),
    },
  ];
  return (
    <>
      <Text>zanil</Text>
      <Story
        unPressedBorderColor="#e95950"
        pressedBorderColor="#ebebeb"
        stories={stories}
        footerComponent={
          <TextInput placeholder="Send message" placeholderTextColor="white" />
        }
      />
      <Home/>
    </>
  );
};

export default Stories;

const styles = StyleSheet.create({});
