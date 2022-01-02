import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { ItemsScreen } from "./src/features/screens/items.screen";

export default function App() {
  return (
    <>
      <ItemsScreen />
    </>
  );
}
