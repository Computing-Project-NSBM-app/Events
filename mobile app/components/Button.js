import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';



export default function ButtonClick({click, name, disable}) {
  return (
    <TouchableOpacity onPress={click} disabled={disable}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{name}</Text>
        </View>
    </TouchableOpacity>

  )}

  const styles= StyleSheet.create({
      button:{
        borderRadius:8,
        backgroundColor:'coral',
        paddingHorizontal:10,
        paddingVertical:14,

      },
      buttonText:{
          color:'black',
          textAlign:'center',
          fontSize:18
      }
  })