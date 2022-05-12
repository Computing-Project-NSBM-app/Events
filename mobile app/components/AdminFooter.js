import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';

const AdminFooter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
            <AntDesign  name="home" size={35} color="black" />
            <Text>News</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
          <MaterialCommunityIcons name="calendar" size={35} color="black" />
          <Text>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
            <Feather name="plus-square" size={35} color="black" />
            <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
          <Ionicons name="people" size={35} color="black" />
            <Text>Clubs</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
            <Ionicons name="person" size={35} color="black" />
            <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginTop:100,
        backgroundColor:'#1e90ff',
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



export default AdminFooter