import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Newsdata } from '../data/Newsdata'

const NewsDesc = ({detail}) => {
    const [details,setdetails]=useState('')

  return (
    <View style={styles.container}>
        <Text style={styles.text1}>sasa</Text>
    </View>
  )
}

const styles =StyleSheet.create({
  container:{flex:1,
     backgroundColor:'black',
     display:'flex',
     justifyContent:'center',
     alignItems:'center'  
    },
     text1:{
       color:'white'}
})
export default NewsDesc;