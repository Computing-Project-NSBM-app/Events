import { Modal ,View, Text,StyleSheet,ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Addcard = ({Prop,clicked}) => {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.card1} onPress={clicked}>
            <Image style={styles.img} source={require('../assets/cardBack.jpg')} />
            <Text style={styles.text1}>{Prop}</Text>
        </TouchableOpacity>
      
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        display:'flex', 
    },
    card1:{
        marginTop:'5%'
       
    },
    img:{
        borderRadius:25,
        resizeMode:'cover',
        height:200,
        width:'100%',
        zIndex:10,

    },
    text1:{
        color:'white',
        fontSize:25,
        position:'absolute',
        marginTop:155,
        zIndex:12,
        marginLeft:'5%'
    }
})

export default Addcard

/*card1:{
    backgroundColor:'rgba(255,255,255, 0.6)',
    paddingHorizontal:5,
    paddingTop:155,
    paddingBottom:10,
    borderRadius:50,
    marginTop:'20%',
    display:'flex',
    justifyContent:'flex-start',    
},*/