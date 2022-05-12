import { View, Text,StyleSheet,ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import ButtonClick from './Button'
import { useNavigation } from '@react-navigation/native'

const ClubsMain = ({Prop}) => {

  const navigation= useNavigation();
  return (
    <ScrollView style={styles.container}>
        <View style={styles.card1}>
            <Image style={styles.img} source={require('../assets/cardBack.jpg')} />
            
            <Text style={styles.text1}>{Prop}</Text>
            <Text style={styles.divider}>___________________________________________</Text>
            <Text style={styles.text2}>shdiahdiahsdasodasjdlajsdkaspdkaspdjaspdjaspdjaspdjapsjdpasjdpasdddddddddddddddddddddddd</Text>
        </View>
        <View style={styles.container3}>
            <ButtonClick name='Join US' Us click={()=>navigation.navigate('Form')}/>
        </View>
      
    </ScrollView>
  )
}

const styles= StyleSheet.create({
    container:{
        display:'flex', 
    },
    card1:{
    },
    img:{
        borderRadius:25,
        resizeMode:'cover',
        height:300,
        width:'100%',
        zIndex:10,
        marginTop:'5%'
    },
    text1:{
        color:'white',
        fontSize:25,
        position:'absolute',
        marginTop:'8%',
        zIndex:12,
        alignSelf:'center'
    },
    divider:{
        color:'white',
        fontSize:25,
        position:'absolute',
        marginTop:'9.8%',
        zIndex:12,
        alignSelf:'center',
        fontWeight:'bold'
    },
    text2:{
        color:'white',
        fontSize:25,
        position:'absolute',
        marginTop:'18%',
        zIndex:12,
        textAlign:'center',
        marginHorizontal:20
    },
    container3:{
        position:'absolute',
        marginTop:'50%',
        zIndex:12,
        alignSelf:'center'

    }

})

export default ClubsMain
