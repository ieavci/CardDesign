import React from "react";
import {View,Text, SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';
import Card from "./src/Card";

function App(){  
  return(
    <SafeAreaView style={styles.container}>
      
      <Card
      title="Erol"
      detail="İbrahim kendine gel"
      />
      <Card
      title="Jon Snow"
      detail="My watch is ended!"
      />
      <Card
      title="Arif Işık"
      detail="Uzaylılar tarafından kaçırıldım. Evet tarafından"
      />
      <Card
      title="Gibi Yılmaz"
      detail="Seni 14. yumurtada durduran ne oldu İlkkan?"
      />
      
        
    </SafeAreaView>
    
  );
}
const styles =StyleSheet.create({
  container:{
    flex:1,      
    justifyContent:'flex-start',
    backgroundColor:'white',   
    margin:3,
    padding:3 
  },
  card_container:{
    backgroundColor:'red ',
    margin:5,
    borderWidth:1,
    borderColor:'tan',
    borderRadius:4, 
  },
  card_body:{
    padding:10,
    margin:8,
       
  },
  card_title:{
    fontSize:35,
    fontStyle:'italic',
    fontWeight:'bold',
    
  },
  card_detail:{
    fontSize:20,
    textAlign:"center",
  },
  card_button_container:{
    backgroundColor:'chocolate',
    padding:5,
    margin:0,
    marginTop:0,
    marginBottom:0,
  },
  card_button_title:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:'white'
  },
})
export default App; 