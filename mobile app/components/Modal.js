import { View,  StyleSheet, TouchableOpacity, Modal, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Modalmi = ({bomb,close,change}) => {
  return (
    <Modal visible={{bomb}} animationType='slide' style={styles.modal1}>
        <View  style={styles.modal1}>
            <TouchableOpacity style={styles.modalclose}>
              <AntDesign 
              name="closecircleo" 
              size={40} 
              color="white" 
              onPress={close}/>
            </TouchableOpacity>
       
            <View style={styles.modal}>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>{change}</Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>{change} </Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>{change} </Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>{change} </Text>
            </View>
        </View>
        </Modal>
  )
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      display:'flex'
      
    },
    container2:{
      marginTop:'auto'
    },
    modal1:{
      flex:1,
      backgroundColor:'black'
    },
    modalclose:{
      marginTop:'8%',
      alignSelf:'center'
    },
    modal:{
      flex:1,
      marginHorizontal:'5%',
      justifyContent:'center',
      alignItems:'center'
    }
  })

export default Modalmi