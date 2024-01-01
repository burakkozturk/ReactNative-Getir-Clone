import React, { useState } from 'react'
import { View, Text,  Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'

const {width, height} = Dimensions.get("window")

const CategoryBox = ({item, active}:{item:Category, active:Category}) => {
    return(
        <View style={[{padding:9,justifyContent:'center', alignItems:'center'},item.name==active.name && {borderBottomColor:'#ffd00c', borderBottomWidth:2., backgroundColor:'#4e148c'}]}>
            <Text style={{color:'white',fontWeight:600
            , fontSize:15}}>{item.name}</Text>
        </View>
    )
}


function index({category}:{category:Category}) {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)  
  return (
    <ScrollView style={{width:"100%", backgroundColor:'#7849f7',   height:height*0.065, margin:0}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true }>
        {
            categories.map((item) => (
                <CategoryBox key={item.id} item={item} active={category}  />
            ))
        }
    </ScrollView>
  )
}

export default index