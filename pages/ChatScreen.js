import { Text, SafeAreaView, View, Pressable } from "react-native";
import styles from "../styles";

const ChatScreen = () => {


  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.eventCard}>
        <View style={styles.eventImage}>
          <Text>Chat</Text>
        </View>
        <View style={styles.eventDescription}>
          <Text>Chat</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
