import { View } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import Form from "../components/AddEvent";
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
// import { createStackNavigator,createBottomTabNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminLogin from "../components/Adminlogin";
import HomeAdmin from "../components/HomeAdmin";
import News from "../components/News";;
import Header from "../components/Header";
import TabNavigator from '../Navigators/TabNavigator'
import TabNavigatorAdmin from "./TabNavigatorAdmin";
import NewsDesc from "../components/NewsDesc";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import FormikForm from "../components/FormikForm";
import AddEvent from "../components/AddEvent";
import AddNews from "../components/AddNews";
import AddClub from "../components/AddClub";
import StudentLogin from "../components/StudentLogin";



const Stack = createNativeStackNavigator();


export default function StackNavigator() {
  return (
    <NavigationContainer independent theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            
              <Stack.Screen name="UserSelect" component={Header} />
              <Stack.Screen name="StudentLogin" component={StudentLogin} />
              <Stack.Screen name="AdminLogin" component={AdminLogin} />
              <Stack.Screen name="News" component={News} />
              <Stack.Screen name="Tab" component={TabNavigator} />
              <Stack.Screen name="Tab2" component={TabNavigatorAdmin}/> 
              <Stack.Screen name="NewsDetails" component={NewsDesc}/> 
              <Stack.Screen name="Form" component={FormikForm}/>
              <Stack.Screen name="AddEvent" component={AddEvent}/>
              <Stack.Screen name="AddNews" component={AddNews}/>
              <Stack.Screen name="AddClub" component={AddClub}/>
         
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
/*<Stack.Screen name="News" component={News} />
<Stack.Screen name="NewsDesc" component={NewsDesc} />
<Stack.Screen name="HomeAdmin" component={HomeAdmin} />
<Stack.Screen name="Form" component={Form} />*/

     /*View style={{ marginTop: "auto" }}>
       <View style={{ display: "flex", flex: 1 }}>
         
       </View>
       <Footer />
     </View>*/
