import Navigation from '@/components/Navigation'
import React, { useState } from 'react'
import { Image, StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native'
import hotelImage from '@/assets/images/EpicSanaHotel.jpg';

import FA from 'react-native-vector-icons/FontAwesome';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import AD from 'react-native-vector-icons/AntDesign';
import II from 'react-native-vector-icons/Ionicons';
import AnimatedComponent from '@/components/AnimatedComponent';
import ZiqZaqListComponent from '@/components/ZiqZaqListComponent';



const activeColor = '#ff6f6f';

const hotelList = [
  {
    name: 'Epic Sana Hotel',
    frontPhoto: hotelImage,
    description: 'This hotel is the best hotel in the world',
    stars: 5,
  },
  {
  name: 'Hotel 2',
  frontPhoto: hotelImage,
  description: 'This hotel is the second best hotel in the world',
  stars: 4,
  },
  {
    name: 'Hotel 3',
    frontPhoto: hotelImage,
    description: 'This hotel is the third best hotel in the world',
    stars: 3,
  },
  {
    name: 'Hotel 4',
    frontPhoto: hotelImage,
    description: 'This hotel is the fourth best hotel in the world',
    stars: 2,
  },
  {
    name: 'Hotel 5',
    frontPhoto: hotelImage,
    description: 'This hotel is the fifth best hotel in the world',
    stars: 1,
  },
  {
    name: 'Hotel 6',
    frontPhoto: hotelImage,
    description: 'This hotel is the sixth best hotel in the world',
    stars: 5,
  },
  {
    name: 'Hotel 7',
    frontPhoto: hotelImage,
    description: 'This hotel is the seventh best hotel in the world',
    stars: 4,
  },
  {
    name: 'Hotel 8',
    frontPhoto: hotelImage,
    description: 'This hotel is the eighth best hotel in the world',
    stars: 3,
  },
  {
    name: 'Hotel 9',
    frontPhoto: hotelImage,
    description: 'This hotel is the ninth best hotel in the world',
    stars: 2,
  },
  {
    name: 'Hotel 10',
    frontPhoto: hotelImage,
    description: 'This hotel is the tenth best hotel in the world',
    stars: 1,
  },
  {
    name: 'Hotel 11',
    frontPhoto: hotelImage,
    description: 'This hotel is the eleventh best hotel in the world',
    stars: 5,
  },
  {
    name: 'Hotel 12',
    frontPhoto: hotelImage,
    description: 'This hotel is the twelfth best hotel in the world',
    stars: 4,
  },
  {
    name: 'Hotel 13',
    frontPhoto: hotelImage,
    description: 'This hotel is the thirteenth best hotel in the world',
    stars: 3,
  },
  {
    name: 'Hotel 14',
    frontPhoto: hotelImage,
    description: 'This hotel is the fourteenth best hotel in the world',
    stars: 2,
  },
  {
    name: 'Hotel 15',
    frontPhoto: hotelImage,
    description: 'This hotel is the fifteenth best hotel in the world',
    stars: 1,
  },
  {
    name: 'Hotel 16',
    frontPhoto: hotelImage,
    description: 'This hotel is the sixteenth best',
    stars: 5,
  }
]


export default function HotelsScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hotels</Text>  
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.content}>
            <ZiqZaqListComponent content={hotelList}/>
          </View>
        </ScrollView>
        <Navigation currentPage="home" navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff'
  },
    contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  content: {
      // paddingHorizontal: 80,
    flex: 1,
    height: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
})