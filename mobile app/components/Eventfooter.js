import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Eventfooter() {

    const navigation =useNavigation();
    const[like, setlike]=useState('heart')
    const change=(name)=>{
        setlike(name);
        if(name=='Participating'){
          navigation.navigate('Form')
        }
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{
        backgroundColor:like=='Interested'? 'darkred':'white',
        borderRadius:30,
        paddingVertical:6,
        paddingHorizontal:16,}}
        onPress={()=>{change('Interested')}}
        >
          <Text style={{color:like=='Students'?'white':'black'}}>Interested</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor:like=='Participating'? 'darkred':'white',
        borderRadius:30,
        paddingVertical:6,
        paddingHorizontal:16,}}
        onPress={()=>{change('Participating')}}
        >
          <Text style={{color:like=='Participating'?'white':'black'}}>Participating</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor:like=='Not Interested'? 'darkred':'white',
        borderRadius:30,
        paddingVertical:6,
        paddingHorizontal:16,}}
        onPress={()=>{change('Not Interested')}}
        >
          <Text style={{color:like=='Students'?'white':'black'}}>Not Interested</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginBottom:15,
        marginHorizontal:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
        
    }
})