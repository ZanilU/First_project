import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';

// Constants
import {SIZES} from '../../Constants';

// Images


// Packages


const Home = ({navigation}) => {
  // Subscr
  const [isLike, setIslike] = useState([]);

  //sdsendiw

// Posts
  const data = [
    {
      id: 1,
      title: 'Title',
      name: 'Post1',
      image: require('../../images/waterfall.jpeg'),
    },
    {
      id: 2,
      title: 'Title',
      name: 'Post2',
      image: require('../../images/cup.jpeg'),
    },
    {
      id: 3,
      title: 'Title',
      name: 'Post3',
      image: require('../../images/waterfall.jpeg'),
    },
    {
      id: 4,
      title: 'Title',
      name: 'Post4',
      image: require('../../images/cup.jpeg'),
    },
    {
      id: 5,
      title: 'Title',
      name: 'Post4',
      image: require('../../images/cup.jpeg'),
    },
  ];

  // Dislike Function
  const handleDislike = id => {
    let newArray = [];
    newArray = isLike.filter(dislike => dislike != id);
    setIslike(newArray);
  };
  
  return (
    <View style={{height: SIZES.hp('100%')}}>
      <View style={styles.header}>
        <Text style={styles.name}>Zanil</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.imagecontainer}
          onPress={() => navigation.navigate('Prof')}>
          <Image
            style={styles.profileimage}
            source={require('../../images/waterfall.jpeg')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        {data.map(item => (
          <View style={styles.post} key={item.id}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.postcontainer}
              onPress={() => navigation.navigate('Blogg', {item})}>
              <Text style={styles.count}>{item.name}</Text>
              <View style={styles.postimagecontainer}>
                <Image style={styles.postimage} source={item.image} />
              </View>
              <View style={styles.textcontainer}>
                <Text style={styles.heading}>{item.title}</Text>
                <Text style={styles.para}>
                  aaaa sssss aaaaa aaaaaa dddd ffff sssss ddddd dddddd ddddd
                  ddddd ddddd ddddd ...... more
                </Text>
              </View>
              
            </TouchableOpacity>
            {isLike.includes(item.id) ? (
            <TouchableOpacity
                style={[styles.Like,{backgroundColor: 'red'},]}
                onPress={() => {
                  handleDislike(item.id);
                }}>
                <Text style={styles.liketext}>Like</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
                style={[styles.Like,{backgroundColor: 'green'},]}
                onPress={() => {
                  setIslike([...isLike, item.id]);
                }}>
                <Text style={styles.liketext}>Like</Text>
            </TouchableOpacity>
          )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: '900',
  },
  imagecontainer: {
    width: 60,
    height: 60,
    borderRadius: 200,
    borderWidth: 1,
    overflow: 'hidden',
  },
  profileimage: {
    width: '100%',
    height: '100%',
  },
  postimage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  post: {
    padding: 20,
  },
  postcontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  count: {
    fontSize: 20,
    fontWeight: '200',
    marginBottom: 20,
  },
  postimagecontainer: {
    width: 320,
    height: 200,
    marginBottom: 20,
  },
  scroll: {},
  liketext: {
    textAlign: 'right',
  },
  Like: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 5,
  },
});
