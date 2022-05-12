import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { events } from '../data/Event';
import Footer from './Footer';
import { Events } from '../data/Event';
import EventMain from './EventMain';
import EventDetails from './EventDetails';
import NewsMain from './NewsMain';
import { Newsdata } from '../data/Newsdata';
import { useEffect } from 'react';
import { get } from '../services/http-service';



export default function News() {

   let newsData = [];

  useEffect(() => {
    const results = get('/api/news').then(res => {
      newsData = res;
    }).catch(err => {
      console.log(err)
    });
  }, []);

  return (
      <View style={styles.container}>
        <ScrollView style={styles.img} showsVerticalScrollIndicator={false}>
          {newsData.map((news,index)=>{ 
            return(
            <NewsMain post={news} key={index}/>
          )})}
        </ScrollView>
        
        
      </View>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    flexDirection:'column',

    
  },
  img:{
    height:300,
    zIndex:100
  }

});
