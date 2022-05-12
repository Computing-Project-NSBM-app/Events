import { View, Text, Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import News from '../components/News';
import EventStudent from '../components/EventStudent';
import Adminadd from '../components/Adminadd';
import { Ionicons } from '@expo/vector-icons';
import Availability from '../components/Availability';
import Clubs from '../components/Clubs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FormikForm from '../components/FormikForm';


const Tab = createBottomTabNavigator();

const TabNavigatorAdmin = () => {
  return (
        <Tab.Navigator screenOptions={{
          tabBarShowLabel:false,
          headerShown:false,
          tabBarStyle:{
              backgroundColor:'black',
              height:70,
              elevation:0,
          }
        }}>
         <Tab.Screen name="News" component={News} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                    {focused ?  <MaterialCommunityIcons name="newspaper-variant" size={24} color="white" />:<MaterialCommunityIcons name="newspaper-variant-outline" size={24} color="white" />}
                    <Text style={{color:'white'}}>News</Text>
                </View>
                
            )
        }}/>
        <Tab.Screen name='EventStudents'  component={EventStudent}
        options={{
          tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                  {focused ? <FontAwesome5 name="calendar-day" size={24} color="white" />:<MaterialIcons name="event" size={24} color="white" /> }
                  <Text style={{color:'white'}}>Events</Text>
              </View>
              
          )
        }}/>
        <Tab.Screen name='Add' component={Adminadd}
        options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                    {focused? <Ionicons name="add-circle" size={24} color="white" />:<Ionicons name="add-circle-outline" size={24} color="white" />}
                    <Text style={{color:'white'}}>Add</Text>
                </View>
            )
        }}/>
        <Tab.Screen name='Clubs'  component={Clubs}
        options={{
          tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                  {focused ? <Entypo name="home" size={24} color="white" />: <AntDesign name="home" size={24} color="white" /> }
                  <Text style={{color:'white'}}>Clubs</Text>
              </View>
              
          )
      }}/>
        <Tab.Screen name='Form'  component={FormikForm}
        options={{
          tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                  {focused ? <FontAwesome5 name="user-alt" size={24} color="white" />: <FontAwesome5 name="user" size={24} color="white" /> }
                  <Text style={{color:'white'}}>Profile</Text>
              </View>
              
          )
      }}/>
        </Tab.Navigator>
      
  )
}

export default TabNavigatorAdmin