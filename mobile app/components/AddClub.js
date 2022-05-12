import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import ButtonClick from './Button';
import * as yup from 'yup'
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Divider } from 'react-native-elements';
import { post } from '../services/http-service';


const useSchema =yup.object().shape({
  requirements: yup.string().required(' Caption Should be Below 1000 Characters').max(1000),
  clubtitle:yup.string().required(),
  imageurl:yup.string().required('A URL is Required').url(),
  details: yup.string().required().max(5000)
  
})

const image_placeholder='https://image.shutterstock.com/image-vector/image-preview-icon-picture-placeholder-260nw-1716511726.jpg'

export default function AddClub() {

  const[thumbnail, setthumbnail]=useState(image_placeholder)
  
  const submit=(vnb=>{

    const data = post('/api/club', {caption: "caption", clubtitle:"clubtitle", detail:"detail", imageurl:"imageurl"}).then(res => {
      console.log("Club created")
    })
  })


  return (
    <View
    style={styles.container1}
    >
      <Formik
      validationSchema={useSchema}
      initialValues={{requirements:'',clubtitle:'', imageurl:'', details:''}}
      onSubmit={(values)=>{
        //submit(values)
      }}
      validateOnMount={true}
      >
        {({handleSubmit, handleChange, handleBlur, values, errors, isValid})=>(
          <>
          <View style={{ marginTop: 65, marginHorizontal: 20, flexDirection: 'row', display: 'flex', justifyContent:'flex-start'}}>
            <Image source={{ uri: thumbnail ? thumbnail : image_placeholder }} style={{ width: 100, height: 100, resizeMode:'contain' }} />

            <TextInput
              style={{ color: 'white', fontSize: 20,marginLeft:20 }}
              placeholder='Add a Description...'
              placeholderTextColor='gray'
              multiline={true}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption} />
               {
                errors.caption && (
                    <Text style={{fontSize:15, color:'red'}}>
                        {errors.caption}
                    </Text>
                )
                }
            
          </View>
          <Divider width={.5} orientation='vertical' style={{marginTop:10}}/>
          <TextInput
              style={{ color: 'white', fontSize: 15, marginTop:5, marginHorizontal:20,paddingVertical:20 }}
              placeholder='Club Title'
              placeholderTextColor='gray'
              onChangeText={handleChange('clubtitle')}
              onBlur={handleBlur('clubtitle')}
              value={values.clubtitle} />
              {
                errors.clubtitle && (
                    <Text style={{fontSize:15, color:'red', marginHorizontal:20 }}>
                        {errors.clubtitle}
                    </Text>
                )
              }
              <TextInput
              onChange={(e)=>setthumbnail(e.nativeEvent.text)}
              style={{ color: 'white', fontSize: 15,marginTop:5, marginHorizontal:20 ,paddingVertical:20}}
              placeholder='Enter Image URL '
              placeholderTextColor='gray'
              onChangeText={handleChange('imageurl')}
              onBlur={handleBlur('imageurl')}
              value={values.imageurl} />
              {
                errors.imageurl && (
                    <Text style={{fontSize:15, color:'red', marginHorizontal:20}}>
                        {errors.imageurl}
                    </Text>
                )
              }
              <TextInput
              style={{ color: 'white', fontSize: 15,marginTop:5, marginHorizontal:20,paddingVertical:20 }}
              placeholder='Enter Requirements '
              placeholderTextColor='gray'
              multiline={true}
              onChangeText={handleChange('details')}
              onBlur={handleBlur('details')}
              value={values.details} />
              {
                errors.details && (
                    <Text style={{fontSize:15, color:'red', marginHorizontal:20}}>
                        {errors.details}
                    </Text>
                )
              }

              <View style={{marginTop:10}}>
                  <ButtonClick click={handleSubmit} disable={!isValid} name='Submit'/>
              </View>
              </>
          
        )}

      </Formik>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container1:{
    flex:1,
    backgroundColor:'black'
  },
  container: {
    borderRadius:50,
    padding:25,
    color:'#fff',
    backgroundColor:'rgba(255,255,255, 0.7)',
    height:500,
    width:'95%',
    justifyContent:'center',
  },
  title:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:0,
      
  },
  text1:{
    fontSize:35,
    fontFamily:'Roboto',
    fontStyle:'italic',
    color:'#4b0082'
  },
  input:{
      borderWidth:1,
      borderColor:'grey',
      padding:10,
      marginTop:25,
      borderRadius:50,
      paddingLeft:25,
      backgroundColor:'rgba(255,255,255,1)'

  },
  button:{
    marginTop:25,
    color:'coral'
  }, 
  para2:{
      display:'flex',
      flexDirection:'row',
      marginTop:7
      
  },
  para1:{
      marginTop:15,
  },
  text2:{
    fontSize:18,
    color:'#a9a9a9'
  },
  text3:{
    fontSize:18,
    color:'#a9a9a9'
  },
  text4:{
    fontSize:18,
    color:'#00bfff'
      
  }

});