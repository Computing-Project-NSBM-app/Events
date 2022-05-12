import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Eventfooter from './Eventfooter'

export default function EventDetails({post}) {
  return (
    <View style={styles.container}>
        {!!post.likes&&(
            <Text style={styles.text2}>{post.likes} Participating</Text>
        )}
        
        <View style={styles.container2}> 
            <Text>
                <Text style={styles.text1}>{post.Organizer}  </Text>
                <Text style={styles.text3}>{post.caption}</Text>
            </Text>
        </View>
      
      <View style={{marginTop:15}}>
          <Eventfooter/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
        
    },
    container2:{
        display:'flex',
        flexDirection:'row'
    },
    text1:{
        color:'white',
        marginBottom:5,
        fontWeight:'bold',
        fontSize:15
    },
    text2:{
        color:'#696969'
    },
    text3:{
        color:'white',
        marginBottom:5,
        fontSize:15
    },
})