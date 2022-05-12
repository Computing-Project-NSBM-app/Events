import { View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react';
import EventHeader from './EventHeader';
import { Divider } from 'react-native-elements';
import { Events } from '../data/Event';
import Eventfooter from './Eventfooter';
import EventDetails from './EventDetails';
import NewsDetails from './NewsDetails';
import { Newsdata } from '../data/Newsdata';
import { useNavigation } from "@react-navigation/native";


const NewsMain = ({post}) => {
    const navigation = useNavigation()

    useEffect(() => {
      console.log("news main",post)
    
    }, [])
    

  return (
    <View style={styles.main} >
      <Text style={{color:'white'}}> asdaksjdh</Text>
      <EventHeader post={post}/>
      {/*<View style={styles.detail2}>
        <Text style={styles.text2}>{post.Date} </Text>
        <Text style={styles.text3}>{ post.Month.length > 4? post.Month.slice(0, 3) : post.Month}</Text>
      </View>*/}
      <TouchableOpacity
        onPress={()=>navigation.navigate("NewsDetails")}
        style={styles.container}>

            <Image style={styles.img} source={{uri:post.imagepath}}  />

      </TouchableOpacity>
      <NewsDetails post={post}/>
      <Divider width={1} orientation='vertical'/>
    </View>
  )
}

const styles = StyleSheet.create({
      main:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',

      },
    container:{
        marginTop:10,
        marginBottom:15,
        
    },
    detail1:{
      alignSelf:'center',
      alignItems:'center',
      textAlign:'center',
      width:300,
    },
     detail2:{
      position:'absolute',
      marginTop:180,
      marginLeft:300,
      paddingHorizontal:30,
      paddingVertical:25,
      borderRadius:15,
      backgroundColor:'rgba(255, 255, 255,0.7)',
      zIndex:100,
      
    },
    img:{
        resizeMode:'cover',
        width:'100%',
        height:450
    },
    text3:{
      color:'black',
      textAlign:'center',
      fontSize:20
    },
    text2:{
      color:'#696969',
      textAlign:'center',
      fontSize:27
    }
})

export default NewsMain;