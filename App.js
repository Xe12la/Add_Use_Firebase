import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert} from 'react-native';
import { useEffect, useState} from 'react';
import { TextInput, Pressable } from 'react-native';
import {app, db, getFirestore, collection, addDoc, getDocs, onSnapshot, query} from "./firebase/index";
import { AntDesign, SimpleLineIcons,MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

export default function App() {
  const [title, setTitle] = useState("");
  
  const [groceryList, setGroceryList] = useState([]);
//add data to the db
  const addGroceryItem = async() =>{
    try {
      const docRef = await addDoc(collection(db, "grocery"), {
      title:title,
      });
    
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }


//add data to the array
  useEffect(() =>{

    const queryCollect = query(collection(db, 'grocery'));

    const unsub = onSnapshot(queryCollect, (snap) => {
      snap.forEach((doc) => {
        setGroceryList(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      })
    })
    return unsub;
  }, [ ])

  //Retrun the view of the list
  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>My Grocery List</Text>
      <View style={styles.fixToText}>
        {/* not yet done dili ma add when press the add */}
            <TextInput  
            placeholder='Enter Item Name' 
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
            onSubmitEditing={addGroceryItem}
            />
              <Pressable style={styles.buttonAdd}
              onPress={() => addGroceryItem }

              >
                <Text style={{fontWeight:'700'}}>Add</Text>
              </Pressable>
      </View>

     
      <FlatList
      data={groceryList}
        renderItem={({ item }) => (
          <View style={{ width: '100%', }}>
            <View style={styles.container2} >
                <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
                  {/* item name*/}
                <Text style={styles.items}>{item.data.title}</Text>

                {/* Add to Basket*/}
                <Pressable>
                  <SimpleLineIcons name="basket" size={24} color="black" />
                </Pressable>
                {/* Action needed, delete, update*/}
                <Pressable>
                  <AntDesign name="edit" size={24} color="black" style={{marginRight:10, marginLeft:50}} />
                </Pressable> 

                </View>
              <StatusBar style="auto" />
          </View>
        )}

      />
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
    width:'65%',
    marginLeft: 10,
    borderRadius: 15,
  },
  container2: {
    flexDirection: "row",
    backgroundColor:"#f5a64f",
    justifyContent:'space-between',
    padding:10,
    alignItems:'center',
    width:"90%",
    alignSelf:'center',
    borderRadius: 8,
    marginTop: 20,

  },
  items:{
    flex:1,
    marginLeft: 10,
    fontSize:18,
    fontWeight:'700'

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20

  },
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#de6641',
    marginRight: 20,
    
  },
});
