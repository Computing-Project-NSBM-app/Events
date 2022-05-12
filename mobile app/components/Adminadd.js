import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Addcard from './Addcard'
import { useNavigation } from '@react-navigation/native'



export default function Adminadd() {

  const navigation =useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <Addcard Prop='Event Participants'/>
        <Addcard Prop='Add Event' clicked={()=>navigation.navigate('AddEvent')}/>
        <Addcard Prop='Add News' clicked={()=>navigation.navigate('AddNews')}/>
        <Addcard Prop= 'Add New Clubs' clicked={()=>navigation.navigate('AddClub')}/>
      </View>
      
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1,
    marginTop:'auto'
    
  },
  container2:{
    marginTop:'auto'
  }
})