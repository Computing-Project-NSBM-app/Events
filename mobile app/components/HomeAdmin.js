import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AdminFooter from './AdminFooter';
import EventMain from './EventMain';




export default function HomeAdmin() {
  return (
      <View style={styles.container}>
        <View>
          <EventMain/>
        </View>
        <View style={styles.container2}>
          <AdminFooter/>
        </View>
        
      </View>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    flexDirection:'column',
    backgroundColor:'black'
    
  },
  container2:{
    marginTop:'auto'

  },
  img:{
    height:300,
  }

});

