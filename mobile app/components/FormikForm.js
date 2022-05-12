import { View, Text, ImageBackground,StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import * as yup from 'yup'
import { Formik, yupToFormErrors } from 'formik'
import ButtonClick from './Button'
import { useNavigation } from '@react-navigation/native'



const useSchema =yup.object().shape({
    name: yup.string().required('Full Name is Required'),
    email:yup.string().email().required('An email is Required'),
    studentID:yup.string().min(3).max(6).required('Incorrect Student ID')
    
  })

const FormikForm = () => {
    


    const navigation = useNavigation();

  return (
    <ImageBackground
    source={require('../assets/hotel.jpg')} 
    style={styles.container1}
    blurRadius={7}>

        <Formik
            initialValues={{name:'', email:'', studentID:''}}
            onSubmit={values => {
                console.log(values);
                navigation.goBack();
                
                }}
            validationSchema={useSchema}
            /*validateOnMount={true}*/
        >
            {({handleBlur, handleChange, handleSubmit, values, errors, isValid})=>(
                <View style={styles.container}>
                    <View style={styles.title} >
                        <Text style={styles.text1}>Join With Us,</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Your Full Name'
                        multiline={false}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                     {
                        errors.name && (
                            <Text style={{fontSize:15, color:'red'}}>
                                {errors.name}
                            </Text>
                        )
                    }
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Your Email'
                        multiline={false}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    {
                        errors.email && (
                            <Text style={{fontSize:15, color:'red'}}>
                                {errors.email}
                            </Text>
                        )
                    }
                    <TextInput
                        style={styles.input}
                        placeholder='Student ID'
                        multiline={false}
                        onChangeText={handleChange('studentID')}
                        onBlur={handleBlur('studentID')}
                        value={values.studentID}
                    />
                    {
                        errors.studentID && (
                            <Text style={{fontSize:15, color:'red'}}>
                                {errors.studentID}
                            </Text>
                        )
                    }
                    <View style={{marginTop:10}}>
                        <ButtonClick click={handleSubmit} disable={!isValid} name='Join US'/>
                    </View>
                </View>
            )}

        </Formik>
        
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container1:{
      flex:1,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
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
})

export default FormikForm