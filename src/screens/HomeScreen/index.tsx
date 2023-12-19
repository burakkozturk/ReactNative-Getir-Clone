import React from 'react'
import { ScrollView } from 'react-native'
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
import styles from './styles'

export default function  () {
  return (
    
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"#f5f5f5"}}>

      <HeaderMain/>
      <BannerCarousel/>

    </ScrollView>
  )
}

 