import { Text, SafeAreaView, View, Pressable } from "react-native";
import styles from "../styles";

const MyEventsScreen = () => {

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.eventCard}>
        <View style={styles.eventImage}>
          <Text>Events</Text>
        </View>
        <View style={styles.eventDescription}>
          <Text>Events</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyEventsScreen;
