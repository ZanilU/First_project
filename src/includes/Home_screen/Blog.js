import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

//constants
const Blog = ({route}) => {
    const {item}=route.params
  return (
    <View style={styles.section}>
        <View style={styles.head}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.imagecontainer}>
            <Image  style={styles.profile_image}
            source={item.image} />
        </View>
        <View>
            <Text style={styles.paragraph}>aaaa sssss aaaaa aaaaaa dddd ffff sssss ddddd dddddd ddddd
                  ddddd ddddd ddddd ddddd ddddd ddddd dddd aaaa sssss aaaaa aaaaaa dddd ffff sssss ddddd dddddd ddddd
                  ddddd ddddd ddddd ddddd ddddd ddddd dddd aaaa sssss aaaaa aaaaaa dddd ffff sssss ddddd dddddd ddddd
                  ddddd ddddd ddddd ddddd ddddd ddddd dddd aaaa sssss aaaaa aaaaaa dddd ffff sssss ddddd dddddd ddddd
                  ddddd ddddd ddddd ddddd ddddd ddddd dddd</Text>
        </View>
    </View>
  )
}

export default Blog

const styles = StyleSheet.create({
    imagecontainer:{
        width:300,
        height:400,
        marginBottom:20,
    },
    profile_image:{
        width:'100%',
        height:'100%',
        borderRadius:20,
    },
    section:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    paragraph:{
        textAlign:'center',
        width:300,
    },
    head:{
        marginBottom:20,
        marginTop:20,
    },
    title:{
        fontSize:30,
    }

})