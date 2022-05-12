import { View, Text, StyleSheet,Modal,TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import Addcard from './Addcard'
import { AntDesign } from '@expo/vector-icons';


export default function Adminadd() {

  const [modalOpen1,setmodalOpen1]=useState(false);
  const [modalOpen2,setmodalOpen2]=useState(false);
  const [modalOpen3,setmodalOpen3]=useState(false);

  const Open1=()=>{
    setmodalOpen1(true)
  }
  const close=()=>{
    setmodalOpen1(false);
    setmodalOpen2(false);
    setmodalOpen3(false)
  }
  const Open2=()=>{
    setmodalOpen2(true)
  }

  const Open3=()=>{
    setmodalOpen3(true)
  }
  
  return (
    <View style={styles.container}>
      <Modal visible={modalOpen1} animationType='slide' style={styles.modal1}>
        <View  style={styles.modal1}>
            <TouchableOpacity style={styles.modalclose}>
              <AntDesign 
              name="closecircleo" 
              size={40} 
              color="white" 
              onPress={close}/>
            </TouchableOpacity>
       
            <View style={styles.modal}>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change</Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change</Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change</Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change</Text>
            </View>
        </View>
        </Modal>
        <Modal visible={modalOpen2} animationType='slide' style={styles.modal1}>
        <View  style={styles.modal1}>
            <TouchableOpacity style={styles.modalclose}>
              <AntDesign 
              name="closecircleo" 
              size={40} 
              color="white" 
              onPress={close}/>
            </TouchableOpacity>
       
            <View style={styles.modal}>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change2</Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change2</Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change2</Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change2</Text>
            </View>
        </View>
        </Modal>
        <Modal visible={modalOpen3} animationType='slide' style={styles.modal1}>
        <View  style={styles.modal1}>
            <TouchableOpacity style={styles.modalclose}>
              <AntDesign 
              name="closecircleo" 
              size={40} 
              color="white" 
              onPress={close}/>
            </TouchableOpacity>
       
            <View style={styles.modal}>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change3</Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change3 </Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change3 </Text>
                <Text style={{color:'white', fontSize:25, marginBottom:15}}>change3 </Text>
            </View>
        </View>
        </Modal>

      
      <View style={styles.container2}>
        <Addcard Prop='SwimmingPool Availability' clicked={Open1}/>
        <Addcard Prop='Gym Availability' clicked={Open2}/>
        <Addcard Prop='Check Credits' clicked={Open3}/>
      </View>
      
    </View>
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