import { View, Text, StyleSheet,Modal,TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import Addcard from './Addcard'
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from 'react';
import { get } from '../services/http-service';


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

  let gymData = [];
  let poolData =[];

  useEffect(() => {
    const results = get('/api/pool').then(res => {
      poolData = res;
      console.log(poolData)
    }).catch(err => {
      console.log(err)
    });
  },[]);


  useEffect(() => {
    const results = get('/api/gym').then(res => {
      newsData = res;
      console.log(gymData,'==================================')
    }).catch(err => {
      console.log(err)
    });
  }, []);

  
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
                  {poolData.map((pool,index)=>{
                  console.log("==news== ", news)
                  return(
                    <>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Available Space: {pool.availableSpace}</Text>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Number Allowed: {pool.numberallowed}</Text>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Last Entered Time: {pool.lastentrytime}</Text>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Opening Time: {pool.openeningtime}</Text>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Closing Time: {pool.closingtime}</Text>
                    </>
                )})}
                
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
                  {gymData.map((gym,index)=>{
                  console.log("==news== ", news)
                  return(
                    <>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Available Space: {gym.availableSpace}</Text>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Number Allowed: {gym.numberallowed}</Text>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Last Entered Time: {gym.lastentrytime}</Text>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Opening Time: {gym.openeningtime}</Text>
                    <Text style={{color:'white', fontSize:25, marginBottom:15}}>Closing Time: {gym.closingtime}</Text>
                    </>
                )})}
                
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