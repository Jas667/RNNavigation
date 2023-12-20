import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({route, navigation}) {
  const {name} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Update the name" onPress={() => navigation.setParams({name: "James Bond"})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});