import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ClubsMain from './ClubsMain'
import { useEffect } from 'react';
import { get } from '../services/http-service';

const Clubs = () => {
  let newsData = [];

  useEffect(() => {
    const results = get('/api/club').then(res => {
      newsData = res;
      console.log(newsData)
    }).catch(err => {
      console.log(err)
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
      {newsData.map((clubs,index)=>{
            console.log("==news== ", news)
            return(
            <ClubsMain prop={clubs.clubname} post={clubs} key={index}/>
          )})}
      </View>  
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:'10%'
  },
  container2:{
    marginTop:'auto'
  }
})

export default Clubs