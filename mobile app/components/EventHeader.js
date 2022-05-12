import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';

export default function EventHeader({post}) {
  return (
    <View style={styles.container}>
        
      <Text style={styles.text}>{post.Title}</Text>
      <TouchableOpacity>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10,
        marginHorizontal:10
        
    },
    text:{
        color:'white',
        fontSize:20
    }
})