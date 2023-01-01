import { StyleSheet } from "react-native";
import Card from "./Card";

export default StyleSheet.create({
    
      container:{
        backgroundColor:'red ',
        margin:5,
        marginTop:20,
        borderWidth:1,
        borderColor:'tan',
        borderRadius:4, 
      },
      body:{
        padding:10,
        margin:8,
           
      },
      title:{
        fontSize:35,
        fontStyle:'normal',
        fontWeight:'bold',
        
      },
      detail:{
        fontSize:20,
        textAlign:"center",
        fontStyle:'italic',
      },
      button_container:{
        backgroundColor:'chocolate',
        padding:5,
        margin:0,
        marginTop:0,
        marginBottom:0,
      },
      button_title:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        color:'white'
      }
});
