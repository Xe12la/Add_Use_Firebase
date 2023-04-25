import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeArray } from 'react-native';
import Grocery from "./Screens/Grocery";

export default function App() {
  return (
    <SafeArray style={styles.container}>
      <Grocery/>
    </SafeArray>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
