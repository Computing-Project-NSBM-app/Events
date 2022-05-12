import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity,Image,bac } from 'react-native';
import ButtonClick from './Button';
import { useNavigation } from '@react-navigation/native';
import Form from './AddEvent';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react/cjs/react.development';
import { Formik } from 'formik';
import * as yup from 'yup'
import { Validator } from 'react';
import { Validator as FormikValidator } from 'email-validator'


export default function AdminLogin() {
  
  const loginschema=yup.object().shape({
    email: yup.string().email().required('An Valid Email is Required'),
    password:yup.string().required('Password is Required')
  })

  const [activetab,setactivetab]=useState('Students')
  const navigation = useNavigation();

  const onLogin = async(email, password)=>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password)
      console.log("Firebase Login Successful")
    }catch(error){
      Alert.alert(error.message)
    }
  }

  const butonname= 'Login'
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
        <Image style={styles.img} source={require('../assets/logo.png')}/>
    </View>
    
    <LinearGradient 
        colors={['hsl(180, 100%, 50%)','hsl(53, 100%, 100%)']}
        start={[0.5,0.]}
        end={[0.5,0.5]}
        style={styles.linear}>
        
          <View style={styles.title} >
              <Text style={styles.text1}>Welcome</Text>
          </View>
          <Formik
            initialValues={{email:'', password:''}}
            onSubmit={
              (values)=>
              {onLogin(values.email, values.password)
              navigation.navigate('Tab2')}
            }
            validationSchema={loginschema}
            validateOnMount={true}
          >
            {({handleChange, handleSubmit, handleBlur, values, isValid, errors})=>(  
          <>
          <View>
              <TextInput
                  style={styles.input}
                  placeholder='Email'
                  color='black'
                  autoFocus={true}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
              />
              {(
                errors.email && (
                <Text style={{fontSize:15, color:'red'}}>
                  {errors.email}
                </Text>)
              )}
              <TextInput
                  style={styles.input}
                  placeholder='Password'
                  secureTextEntry={true}
                  autoFocus={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
              />
              {(
                errors.password && (
                <Text style={{fontSize:15, color:'red'}}>
                  {errors.password}
                </Text>)
              )}
          </View>
          <View style={styles.button}>
              <ButtonClick name='Login' click={handleSubmit} disable={!isValid}/>
          </View>
          </> )}
          </Formik>
          <View style={styles.para1}>
              <TouchableOpacity>
              <Text style={styles.text2} >forget password?</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.para2}>
              <TouchableOpacity>
                  <Text style={styles.text3}>Don't you have an account?  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>navigation.navigate("Form")}
              >
                  <Text style={styles.text4}>SignUp</Text>
              </TouchableOpacity>
              
          </View>
    
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  linear:{
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    padding:25,
    color:'#fff',
    marginTop:'auto',
  
  },
  title:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:15,
      marginBottom:10
      
  },
  text1:{
    fontSize:35,
    fontFamily:'Roboto'
  },
  input:{
      borderWidth:1,
      borderColor:'grey',
      padding:10,
      marginTop:25,
      borderRadius:50,
      backgroundColor:'rgba(255,255,255,1)'

  },
  button:{
    marginTop:100,
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
      
  },
  img:{
    height:'100%',
    width:'100%',
  },


});