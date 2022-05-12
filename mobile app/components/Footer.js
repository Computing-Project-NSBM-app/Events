import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Footer = () => {

  const [activetab,setactivetab]=useState('News')
  const select =(name)=>{
    setactivetab(name);
    if(name==='News'){
      navigation.navigate('News')
    }else if(name==='Events'){
      navigation.navigate('EventStudent')
    }
  }

  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={()=>{select('News')}}>
            <AntDesign  name="home" size={25} color="white" />
            <Text style={{color:'white'}}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.btn,{backgroundColor:activetab == 'Events'?'white':'black'}]} onPress={()=>{select('Events')}}>
          {activetab == 'Events' ?<Ionicons name="calendar" size={24} color="white" />:<Ionicons name="calendar-outline" size={24} color="white" />}
          <Text style={{color:activetab == 'Events' ?'white':'white'}}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
            <Entypo name="sports-club" size={25} color="white" />
            <Text style={{color:'white'}}>Availability</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
          <Ionicons name="people" size={25} color="white" />
            <Text style={{color:'white'}}>Clubs</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
            <Ionicons name="person" size={25} color="white" />
            <Text style={{color:'white'}}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginTop:0,
        backgroundColor:'#000',
        padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    btn:{
      display:'flex',
      alignItems:'center'
    }
})



export default Footer