import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeArray } from 'react-native';
import Grocery from "./Screens/Grocery";

export default function App() {
  return (
    <View style={styles.container}>
      <Grocery/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
