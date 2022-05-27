import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  
} from 'react-native';
import React, {useState} from 'react';
import {SIZES} from '../../Constants';

const Login = ({navigation}) => {
  const [array, setArray] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    setArray([
      ...array,
      {
         name,
         email,
         phone,
         address,
      },	  
    ]
	);
	 navigation.navigate('storr')
  };
  console.log(array);
  return (
    <>
      <SafeAreaView>
			<ScrollView style={styles.maincontainer}>
		<View style={styles.section}>

			<View style={styles.conatiner}>
				<Text style={styles.Head}>Form</Text>
			</View>
			<View style={styles.inputform}>
				<Text style={styles.name}>Name</Text>
				<TextInput
				placeholder="Enter your name"
				style={styles.box}
				onChangeText={text => setName(text)}
				value={name}
				/>

				<Text style={styles.name}>Phone</Text>
				<TextInput
				placeholder="Enter your number"
				style={styles.box}
				onChangeText={text => setPhone(text)}
				value={phone}
				/>

				<Text style={styles.name}>Email</Text>
				<TextInput
				placeholder="Enter your Email"
				style={styles.box}
				onChangeText={text => setEmail(text)}
				value={email}
				/>
				<Text style={styles.name}>Address</Text>
				<TextInput
				placeholder="Enter your address"
				style={styles.Address_box}
				onChangeText={text => setAddress(text)}
				value={address}
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={handleSubmit }>
				<Text>Submit</Text>
			</TouchableOpacity>
		</View>
			</ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  Head: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  conatiner: {
  },
  box: {
    borderWidth: 1,
    width: SIZES.wp('80%'),
    marginBottom: 20,
	height:40,
	padding:10,
	borderRadius:5,
},
inputform: {
    marginBottom: 20,
},
name: {
	marginBottom: 20,
    fontWeight: '600',
},
Address_box: {
	borderWidth: 1,
	width: SIZES.wp('80%'),
    height: 100,
	padding:10,
	borderRadius:5,
	
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
	backgroundColor:'green',
	width: 100,
	padding:10,
	borderRadius:5,
	
  },
  maincontainer:{
	  padding:SIZES.wp('10%'),
	  width:SIZES.wp('100%'),
  },
  section:{
	alignItems:'center'
  }
});
