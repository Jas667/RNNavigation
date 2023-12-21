import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home Screen",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Pressable
                onPress={() => alert("This is a button!")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Text style={{ color: "white", marginRight: 20, fontSize: 16 }}>Info</Text>
              </Pressable>
            ),
          }}
        />
        <stack.Screen name="About" component={AboutScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
