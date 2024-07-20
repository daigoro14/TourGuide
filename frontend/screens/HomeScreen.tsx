import Navigation from '@/components/Navigation'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import FA from 'react-native-vector-icons/FontAwesome';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import AnimatedComponent from '@/components/AnimatedComponent';
import backgroundImage from '@/assets/images/IMG_9350.jpg';
import cat from '@/assets/images/serious-cat-square-dog-photography.jpg';

const activeColor = '#ff6f6f';


export default function HomeScreen() {
  const activities = [
    {
      name: 'Hotels',
      icon: <FA name="hotel" color={activeColor} style={styles.icon}/>
    },
    {
      name: 'Activities',
      icon: <MCI name="google-maps" style={styles.icon}/>
    },
    {
      name: 'Tour Guides',
      icon: <FA6 name="people-group" style={styles.icon}/>
    },
    {
      name: 'History & Culture',
      icon: <MCI name="book-open-variant" style={styles.icon}/>
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.background}>
          <View style={styles.content, styles.overlay}>
          {activities.map((activity, index) => {
            const borderColor = [activeColor, '#ffd70e', '#3a3a3a'][index % 3];
            return (
              <View key={index} style={[styles.iconContainer, index % 2 === 0 ? styles.icon1 : styles.icon2]}>
                <View style={[styles.circle, {borderColor}]} >{activity.icon}</View>
                <Text>{activity.name}</Text>
              </View>
          )})}
          </View>
        </ImageBackground>
        <Navigation currentPage="home"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: overlay to improve text visibility
  },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        paddingHorizontal: 80,
        flex: 1,

    },
    icon: {
        color: '#2f2e2e',
        fontSize: 40 ,
    },
    circle: {
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 120,
      width: 120,
      borderRadius: 60,
      borderWidth: 6,
    },
    icon1: {
      marginRight: 'auto'
    },
    icon2: {
      marginLeft: 'auto'
    },
    iconContainer: {
      alignItems: 'center',
    }
    })