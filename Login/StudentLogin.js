import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  bac,
} from "react-native";
import ButtonClick from "./Button";
import { useNavigation } from "@react-navigation/native";
import Form from "./AddEvent";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";
import { useState } from "react/cjs/react.development";

export default function StudentLogin() {
  const [activetab, setactivetab] = useState("Students");
  const navigation = useNavigation();

  const butonname = "Login";
  return (
    <View style={{ flex: 1,display:'flex', backgroundColor:'white' }}>
      <View style={{ flex: 1,display:'flex',alignItems:'center',justifyContent:'center' }}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
      </View>

      <LinearGradient
        colors={["hsl(180, 100%, 50%)", "hsl(53, 100%, 100%)"]}
        start={[0.5, 0]}
        end={[0.5, 0.5]}
        style={styles.linear}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.text1}>Welcome</Text>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Email" color="black" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              name="pass"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.button}>
            <ButtonClick
              name={butonname}
              click={() => navigation.navigate("Tab")}
            />
          </View>
          <View style={styles.para2}>
            <TouchableOpacity>
              <Text style={styles.text3}>Don't you have an account? </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Form")}>
              <Text style={styles.text4}>SignUp</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.para1}>
            <TouchableOpacity>
              <Text style={styles.text2}>forget password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linear: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 25,
    color: "#fff",
    // marginTop: "auto",
    // flex: 1,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  text1: {
    fontSize: 35,
    fontFamily: "Roboto",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginTop: 25,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,1)",
  },
  button: {
    marginTop: 100,
    marginTop: 25,
    color: "coral",
  },
  para2: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'center',
    marginTop: 7,
  },
  para1: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent:'center'
  },
  text2: {
    fontSize: 18,
    color: "#a9a9a9",
  },
  text3: {
    fontSize: 18,
    color: "#a9a9a9",
  },
  text4: {
    fontSize: 18,
    color: "#00bfff",
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: "cover",
  },
});
