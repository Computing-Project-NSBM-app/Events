import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Users } from '../data/Users'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { useEffect } from 'react';
import { get } from '../services/http-service';

const Profile = (userId) => {
  const index=1
  let userData;;

  useEffect(() => {
    const results = get(`/api/user/${userId}`).then(res => {
      userData = res;
    }).catch(err => {
      console.log(err)
    });
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
          <Image style={styles.img} source={{uri:userData.image}}/>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text1}>Name</Text>
        <Text style={styles.text2}>{userData.user}</Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.text1}>Student ID</Text>
        <Text style={styles.text2}>{userData.key}</Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.text1}>Email</Text>
        <Text style={styles.text2}>{userData.email}</Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.text1}>Contact Number</Text>
        <Text style={styles.text2}>{userData.contactNo}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    img:{
      width:200,
      height:200,
      borderRadius:250
    },
    container1:{
      alignSelf:'center',
      marginTop:'17%'
    },
    text1:{
      marginTop:5,
      color:'black',
      marginHorizontal:'3%',
      fontWeight:'bold',
      fontSize:20

    },
    text2:{
      marginTop:3,
      color:'black',
      marginHorizontal:'3%',
      fontSize:20

    },
    container3:{
      alignItems:'center',
      justifyContent:'center',
      height:'10%',
      width:'90%',
      backgroundColor:'lightgray',
      borderRadius:25,
      marginTop:'10%',
      marginHorizontal:'5%'
    },
    container4:{
      justifyContent:'center',
      alignItems:'center',
      height:'10%',
      width:'90%',
      backgroundColor:'lightgray',
      borderRadius:25,
      marginTop:'5%',
      marginHorizontal:'5%'
    }
})

export default Profile