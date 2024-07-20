import Navigation from '@/components/Navigation'
import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import FA from 'react-native-vector-icons/FontAwesome';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FA6 from 'react-native-vector-icons/FontAwesome6';




export default function HomeScreen() {
  const activities = [
    {
      name: 'Hotels',
      icon: <FA name="hotel" style={styles.navIcon}/>
    },
    {
      name: 'Activities',
      icon: <MCI name="google-maps" style={styles.navIcon}/>
    },
    {
      name: 'Tour Guides',
      icon: <FA6 name="people-group" style={styles.navIcon}/>
    },
    {
      name: 'History & Culture',
      icon: <MCI name="book-open-variant" style={styles.navIcon}/>
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
        {activities.map((activity, index) => (
            <View key={index}>
            {activity.icon}
            <Text>{activity.name}</Text>
            </View>
        ))}
        </View>
        <Navigation currentPage="home"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,

    },
    navIcon: {
        fontSize: 40 ,
    }
    })