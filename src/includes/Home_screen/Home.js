import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import axios from 'react-native-axios';
import {Alert, Modal, Pressable} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  SafeAreaView,
  TextInput
} from 'react-native';
import {SIZES} from '../../Constants';

const Home = () => {
  const [message, setMessage] = useState("");

  const [modalMessage, setModalmessage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [post, setPost] = useState([]);

  const renderPost = () => {
    post.map(datas => <Image style={styles.postimage} source={datas.image} />);
  };

  const [isLike, setIslike] = useState([]);
  const navigation = useNavigation();
  const handleDislike = id => {
    let newArray = [];
    newArray = isLike.filter(dislike => dislike != id);
    setIslike(newArray);
    console.log(newArray, '-----new------');
  };

  useEffect(() => {
    axios
      .get('https://traveller.talrop.works/api/v1/places/categories/')
      .then(response => {
        setPost(response.data.data);
        console.log(response.data.data, '--images--');
      });
  }, []);

  return (
    <View style={{height: SIZES.hp('75%')}}>
      <SafeAreaView>
        <ScrollView style={styles.scroll}>
          {post.map(item => (
            <View style={styles.post} key={item.id}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Status')}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        overflow: 'hidden',
                        borderWidth: 1.8,
                        backgroundColor: 'white',
                        borderColor: '#c13584',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10,
                        marginBottom: 10,
                      }}>
                      <Image
                        style={{
                          width: '93%',
                          height: '93%',
                          resizeMode: 'cover',
                          borderRadius: 100,
                          backgroundColor: 'orange',
                        }}
                        source={{
                          uri: item.image,
                        }}
                      />
                    </View>
                  </TouchableOpacity>

                  <View style={{width: 100, height: 55}}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>
                      {item.name}
                    </Text>
                    <Text>{item.name}</Text>
                  </View>
                </View>
                <View style={{width: 20, height: 30}}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../images/dots_vertical.png')}
                  />
                </View>
              </View>
              <View style={styles.postimagecontainer}>
                <Image
                  style={styles.postimage}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  alignItems: 'center',
                  // backgroundColor: 'green',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 100,
                    alignItems: 'center',
                  }}>
                  {/* Like */}
                  <View>
                    {isLike.includes(item.id) ? (
                      <TouchableOpacity
                        onPress={() => {
                          handleDislike(item.id);
                        }}>
                        <View style={[styles.Like, {}]}>
                          <Image
                            style={{width: '100%', height: '100%'}}
                            source={require('../../images/heart.png')}
                            tintColor="red"
                          />
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          setIslike([...isLike, item.id]);
                          console.log('like');
                        }}>
                        <View style={[styles.Like, {}]}>
                          <Image
                            style={{width: '100%', height: '100%'}}
                            source={require('../../images/heart-border.png')}
                            tintColor="black"
                          />
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>

                  {/* Modal Message */}

                  <View style={styles.centeredView2}>
                    <Modal
                      animationType="fade"
                      transparent={true}
                      visible={modalMessage}
                      onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalmessage(!modalMessage);
                      }}>
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <View style={{marginBottom:10}}>
                          <TextInput
                            style={{width:200,height:40,backgroundColor:'#f2f2f2',}}
                            placeholder="  Add a comment..."
                            keyboardType="numeric"
                            onChangeText={message}
                          />
                          </View>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalmessage(!modalMessage)}>
                            <Text style={styles.textStyle}>Post</Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                    <Pressable
                      style={[styles.button2, styles.buttonOpen]}
                      onPress={() => setModalmessage(true)}>
                      <View style={{width: 25, height: 25}}>
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            transform: [{rotate: '280deg'}],
                          }}
                          source={require('../../images/icons8-topic-50.png')}
                        />
                      </View>
                    </Pressable>
                  </View>

                  {/* Tag */}
                  <View style={{borderWidth: 1, width: 20, height: 20}}></View>
                </View>

                {/* modal Saved */}
                <View style={styles.centeredView1}>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>Image Saved</Text>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setModalVisible(false)}>
                          <Text style={styles.textStyle}>back</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
                  <Pressable
                    style={[styles.buttonOpen]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <View style={{width: 20, height: 20}}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={require('../../images/save.png')}
                      />
                    </View>
                  </Pressable>
                </View>
              </View>
              <Text>20,000 views</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
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
    resizeMode: 'contain',
  },
  post: {
    padding: 20,
  },
  postcontainer: {
    flexDirection: 'column',
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
    // textAlign: 'right',
    // alignSelf: 'flex-end',
    width: 25,
    height: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',

    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 4,
  },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
