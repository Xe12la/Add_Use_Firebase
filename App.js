import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeArray } from 'react-native';
import Grocery from "./Screens/Grocery";
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ textAlign: 'center', marginTop: 50, backgroundColor:'blue', marginBottom: 10, borderRadius: 4, width:'90%', alignSelf:'center', height:30 }}>Grocery List</Text>
      <Grocery/>
      <Grocery/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
