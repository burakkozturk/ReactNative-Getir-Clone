 import { StyleSheet, Dimensions } from "react-native";

 const {height} = Dimensions.get("window")
 const styles = StyleSheet.create({

     headerMain:{
        height: height * 0.062 ,
        backgroundColor:'#ffd60a',
        flexDirection:"row"
     },
     headerLeft:{
        height: height* 0.062,
        width:'80%',
        backgroundColor:'white',
        flexDirection:"row",
        alignItems:'center',
        paddingHorizontal:"5%",
        borderTopRightRadius:22 ,
        borderBottomRightRadius:22
      },
     image:{
        width:30,
        height:30
     },
     headerView:{
        flexDirection:"row",
        textAlign:"center",  
        alignItems:"center"
     },
     headerRight:{
        width:"35%",
        paddingLeft:15,
        justifyContent:'center',
        alignItems:'center'
     }
    
 })

 export default styles; 