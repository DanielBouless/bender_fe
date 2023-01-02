import { useContext } from "react";
import { Text, SafeAreaView, View, Pressable } from "react-native";
import { CurrentUser } from "../context/CurrentUser";
import styles from "../styles";



const HomeScreen = ()=>{

  const {currentUser } = useContext(CurrentUser)
const skipBtnPressed = ()=>{
    console.log("skip button pressed")
}
const requestBtnPressed = () => {
  console.log("request button pressed");
};


    return (
      <SafeAreaView style={styles.app}>
        <View style={styles.eventCard}>
          <View style={styles.eventImage}>
            <Text>Image of Event Goes Here</Text>
          </View>
          <View style={styles.eventDescription}>
            <Text>{currentUser}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable style={styles.skipBtn} onPress={skipBtnPressed}>
            <Text style={styles.text}>Skip</Text>
          </Pressable>
          <Pressable style={styles.requestBtn} onPress={requestBtnPressed}>
            <Text style={styles.text}>Request</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen

