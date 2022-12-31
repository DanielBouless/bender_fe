import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "rgb(98, 98, 110)",
    borderRadius: 3,
    marginBottom: 5,
  },
  background: {
    backgroundColor: "rgb(208, 224, 242)",
  },
  app: {
    flex: 1,
    backgroundColor: "rgb(39, 38, 92)",
  },
  text: {
    alignSelf: "center",
    color: "white",
  },
  card: {
    margin: 60,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 3,
  },
  eventCard: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 3,
    height: 550,
  },
  eventImage: {
    borderColor: "black",
    borderWidth: 1,
    height: 300,
    marginBottom: 20,
  },
  eventDescription: {
    borderColor: "black",
    borderWidth: 1,
    height: 200,
  },
  skipBtn: {
    flex: 1,
    margin: 10,
    backgroundColor: "red",
    width: 150,
    borderRadius: 3,
    padding: 10,
  },
  requestBtn: {
    flex: 1,
    margin: 10,
    backgroundColor: "green",
    width: 150,
    borderRadius: 3,
    padding: 10,
  },
  navBarContainer:{
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
});

export default styles