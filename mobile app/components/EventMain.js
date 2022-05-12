import { View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import EventHeader from './EventHeader';
import { Divider } from 'react-native-elements';
import { Events } from '../data/Event';
import Eventfooter from './Eventfooter';
import EventDetails from './EventDetails';

const EventMain = ({post}) => {
  
  return (
    <View style={styles.main} >
      <EventHeader post={post}/>
      <View style={styles.detail2}>
        <Text style={styles.text2}>{post.Date} </Text>
        <Text style={styles.text3}>{ post.Month.length > 4? post.Month.slice(0, 3) : post.Month}</Text>
      </View>
      <View
      style={styles.container}>
            <Image style={styles.img} source={{uri:post.imagepath}} />
      </View>
      <EventDetails post={post}/>
      <Divider width={1} orientation='vertical'/>
    </View>
  )
}

const styles = StyleSheet.create({
      main:{
        flex:1
      },
    container:{
        marginTop:10,
        marginBottom:15,
        
    },
    detail1:{
      alignSelf:'center',
      alignItems:'center',
      textAlign:'center',
      width:300,
    },
     detail2:{
      position:'absolute',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'30%',
      marginLeft:'65%',
      paddingHorizontal:5,
      paddingVertical:10,
      borderRadius:15,
      backgroundColor:'rgba(255, 255, 255,0.7)',
      zIndex:100,
      
    },
    img:{
        resizeMode:'cover',
        width:'100%',
        height:450
    },
    text3:{
      color:'black',
      fontSize:20
    },
    text2:{
      color:'#696969',
      fontSize:27
    }
})

export default EventMain;