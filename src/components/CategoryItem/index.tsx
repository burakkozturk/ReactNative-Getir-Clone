import React from 'react'
import { TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { Category } from '../../models'

const {width, height} = Dimensions.get("window")
type categoryItemProps = {
  item : Category
}
export default function index({item} : categoryItemProps ) {
  
  return (
    <TouchableOpacity style={{width:width*0.25, height:width*0.24 ,  flexDirection:"column", alignItems:"center", justifyContent:"space-between", marginTop:10}}>
        <Image style={{width:width * 0.18, height: width*0.18 , borderRadius:8  }} 
        source={{uri:item.src}}></Image>
        <Text style={{fontSize:12, color:"#616161", fontWeight:"600"}}>{item.name}</Text>
    </TouchableOpacity>
  )
}
 