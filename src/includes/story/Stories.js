import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Story from 'react-native-story';
import Home from '../Home_screen/Home';
import {SIZES} from '../../Constants';

const Stories = ({navigation}) => {
  const stories = [
    {
      id: '1',
      source: require('../../images/waterfall.jpeg'),
      user: 'Zanil',
      avatar: require('../../images/zan.jpeg'),
    },
    {
      id: '2',
      source: require('../../images/waterfall.jpeg'),
      user: 'Mustafa',
      avatar: require('../../images/waterfall.jpeg'),
    },
    {
      id: '3',
      source: require('../../images/waterfall.jpeg'),
      user: 'Emre Yilmaz',
      avatar: require('../../images/waterfall.jpeg'),
    },
    {
      id: '4',
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
      id: '6',
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
    {
      id: '8',
      source: require('../../images/waterfall.jpeg'),
      user: 'Cenk Gun',
      avatar: require('../../images/waterfall.jpeg'),
    },
    {
      id: '9',
      source: require('../../images/waterfall.jpeg'),
      user: 'Cenk Gun',
      avatar: require('../../images/waterfall.jpeg'),
    },
  ];
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            justifyContent: 'space-between',
            paddingLeft: SIZES.wp('2%'),
            paddingRight: SIZES.wp('2%'),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 130,
            }}>
            <View style={styles.test}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../../images/Instagram-Logo-2010-2013.jpeg')}
              />
            </View>
            <View style={{width: 15, height: 15}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../../images/down-arrow.png')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 50,
              marginLeft: 5,
            }}>
            <View style={{width: 20, height: 20, borderWidth: 1}}></View>
            <View style={{width: 20, height: 20}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../../images/icons8-facebook-messenger.jpeg')}
              />
            </View>
          </View>
        </View>
        <ScrollView
          style={{padding: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {stories.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('Status')}>
                <View
                  style={{
                    width: 68,
                    height: 68,
                    marginRight: 20,
                    borderRadius: 100,
                    overflow: 'hidden',
                    borderWidth: 1.8,
                    backgroundColor: 'white',
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: '92%',
                      height: '92%',
                      resizeMode: 'cover',
                      borderRadius: 100,
                      backgroundColor: 'orange',
                    }}
                    source={item.avatar}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <Home />
      </View>
    </>
  );
};

export default Stories;

const styles = StyleSheet.create({
  test: {
    width: SIZES.wp('30%'),
    height: SIZES.hp('8%'),
    marginTop: SIZES.hp('2%'),
  },
});
