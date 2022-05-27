import {StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const Single_profile = ({ navigation }) => {
  return (
    <>
    
      <TouchableOpacity style={styles.blackarrow} onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.arrow}
          source={require('../../images/black_left-arrow.png')}
        />
      </TouchableOpacity>
      <View style={styles.profile_box}>
        <View style={styles.profile_image_container}>
          <Image
            style={styles.profile_image}
            source={require('../../images/waterfall.jpeg')} />
        </View>
        <Text style={styles.name}>Zanil</Text>
        <View style={styles.paracontainer}>
          <Text style={styles.profile_para}>
            qqqq qqqq qqqqq aaaa sssss aaaaa aaaaaa dddd ffff sssss ddddd dddddd
            ddddd ddddd ddddd ddddd ddddd ddddd ddddd dddd
          </Text>
        </View>
      </View>
      <View style={styles.button} >
        <Button title="log out" onPress={() => navigation.navigate('Home')} />
      </View>
    </>
  );
};

export default Single_profile;

const styles = StyleSheet.create({
  paracontainer: {
    width: 300,
  },

  profile_image_container: {
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: 'hidden',
    marginBottom: 20,
  },
  profile_image: {
    width: '100%',
    height: '100%',
  },
  profile_para: {
    textAlign: 'center',
    fontSize:20,
  },
  profile_box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  name: {
    marginBottom: 20,
    fontSize:30,
    fontWeight:'600'
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  blackarrow:{
    padding:20,
  },
});
