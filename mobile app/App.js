import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './Navigators/StackNavigator'


/*const firebaseConfig = {
  apiKey: "AIzaSyAZ8tCbIQFdK3NgZF-ylFkU9iP2QAZRGaQ",
  authDomain: "nsbm-mobile-app.firebaseapp.com",
  projectId: "nsbm-mobile-app",
  storageBucket: "nsbm-mobile-app.appspot.com",
  messagingSenderId: "510413280840",
  appId: "1:510413280840:web:d10bf0599cd1c1959c2a7d"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}*/



const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
   
      <StackNavigator/>      
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    flexDirection:'column',
    backgroundColor: 'black',
  },

});
