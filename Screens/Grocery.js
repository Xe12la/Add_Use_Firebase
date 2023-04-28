import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, props } from 'react-native';
import { AntDesign, SimpleLineIcons,MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const Grocery = (props)=> {
  return (
    <View >
        <View style={styles.container} >
        <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
          {/* item name*/}
        <Text style={styles.items}>{props.title}</Text>

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
  );
}
export default Grocery;

const styles = StyleSheet.create({
  container: {
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
});
