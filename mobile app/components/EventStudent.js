import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { events } from '../data/Event';
import Footer from './Footer';
import { Events } from '../data/Event';
import EventMain from './EventMain';
import { useEffect } from 'react';
import { get } from '../services/http-service';


export default function EventStudent() {

  let newsData = [];

  useEffect(() => {
    const results = get('/api/event').then(res => {
      newsData = res;
      console.log(newsData)
    }).catch(err => {
      console.log(err)
    });
  }, []);

  return (
      <View style={styles.container}>
        <ScrollView style={styles.img} showsVerticalScrollIndicator={false}>
        {newsData.map((events,index)=>{
            console.log("==news== ", news)
            return(
            <NewsMain post={events} key={index}/>
          )})}
        </ScrollView>
        <View style={styles.container2}>
        </View>
        
      </View>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    flexDirection:'column',
    marginTop:'auto'
  },
  container2:{
    // flex:0.5,
    display:'flex',
    marginTop:'auto'

  },
  img:{
    height:300,
    zIndex:100
  }

});
