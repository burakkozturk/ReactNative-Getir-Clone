import React from 'react'
import {View ,Text ,Image, ViewBase} from "react-native"
import styles from './styles'
import {Entypo} from '@expo/vector-icons'

export default function  () {
  return (
    
    <View style={styles.headerMain}>
        <View style={styles.headerLeft}>
        <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
          <View  style={styles.headerView}>

            <Text style={{fontWeight:'700', fontSize: 16, marginLeft:"5%"}}> Ev</Text> 

             <Text style={{fontWeight:'500', fontSize:13, color:'#6E7480', marginLeft:"6%" }}>Dumlupınar blv. Çankaya ...</Text>
            <Entypo name="chevron-right" size={24} color={"#4e148c"}/>
          </View>
          <View
          style={styles.headerRight}>
          
            <Text style={{fontWeight: "800", color:"#4e148c",fontSize:10}}>TVS</Text>
            <Text style={{fontWeight: "800", color:"#4e148c", fontSize:16 }}>12dk</Text>

          </View>

        </View >
        <View >

        </View>
    </View>
  )
}

 