import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeArray } from 'react-native';
import Grocery from "./Screens/Grocery";
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import {app, db, getFirestore, collection, addDoc} from "./firebase/index";

export default function App() {
  const [title, setTitle] = useState=("");
  const addGroceryItem = async() =>{
    try {
      const docRef = await addDoc(collection(db, "grocery"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }
  return (
    
    <View style={styles.container}>

      <Text style={styles.header}>My Grocery List</Text>
      <TextInput  
      placeholder='Enter Item Name' 
      style={styles.input}
      value={title}
      onChangeText={(text) => setTitle(text)}
      
      />
      <ScrollView>
      <Grocery/>
      <Grocery/>
      <Grocery/>
      <Grocery/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8c98e',
  },
  header:{
    textAlign: 'center', 
    marginTop: 50,  
    marginBottom: 10, 
    alignSelf:'center', 
    fontWeight:'900',
    fontSize:30,
  },
  input:{
    backgroundColor:'#119a93',
    padding: 10,
    fontSize:20,
    width:'80%',
    alignSelf:'center',
    borderRadius: 15,
  },
});
