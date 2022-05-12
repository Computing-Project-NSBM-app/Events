import { View, Text,SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react/cjs/react.development';

const Header=(props)=> {

    const navigation = useNavigation();
    const [activetab,setactivetab]=useState('Students')

    const onUserChange=(user)=>{
      setactivetab(user);
      if(user === 'Admin'){
        navigation.navigate('AdminLogin');
      }else{
        navigation.navigate('StudentLogin')
      }
    }
    
    
  return (
    <View style={styles.head}>
      <TouchableOpacity style={{
        backgroundColor:activetab=='Admin'?'darkred':'black',
        borderRadius:30,
        paddingVertical:6,
        paddingHorizontal:16,}}
        onPress={()=>{onUserChange('Admin')}}
        
        >
          <Text style={{color:activetab=='Admin' ? 'white':'white'}}>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor:activetab=='Students'? 'darkred':'black',
        borderRadius:30,
        paddingVertical:6,
        paddingHorizontal:16,}}
        onPress={()=>{onUserChange('Students')}}
        >
          <Text style={{color:activetab=='Students'?'white':'white'}}>Students</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles =StyleSheet.create({
  head: {
    zIndex:10,
    marginTop:30,
    display:'flex',
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    backgroundColor:'black'

  },
})
export default Header