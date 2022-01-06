import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { ItemsContextProvider } from "../../services/items/items.context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ItemsScreen } from "../../features/screens/items.screen";

const Tab = createBottomTabNavigator();

function FavoritesScreen() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Favorites Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Items") {
              iconName = focused ? "albums" : "albums-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#CEB888",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Items" component={ItemsScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};