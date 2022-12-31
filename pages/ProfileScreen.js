import { Text, SafeAreaView, View, Pressable } from "react-native";
import styles from "../styles";

const ProfileScreen = () => {


  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.eventCard}>
        <View style={styles.eventImage}>
          <Text>Profile</Text>
        </View>
        <View style={styles.eventDescription}>
          <Text>Profile</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default ProfileScreen;
