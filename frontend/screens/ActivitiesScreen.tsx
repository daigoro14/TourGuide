import Navigation from '@/components/Navigation'
import React, { useState } from 'react'
import { FlatList, StyleSheet,ScrollView, SafeAreaView, Text, View } from 'react-native'
import FA from 'react-native-vector-icons/FontAwesome';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import AD from 'react-native-vector-icons/AntDesign';
import II from 'react-native-vector-icons/Ionicons';
import AnimatedComponent from '@/components/AnimatedComponent';


const activeColor = '#ff6f6f';


export default function ActivitiesScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Activities</Text>  
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.content}>
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
    paddingHorizontal: 50,
  },
  content: {
      // paddingHorizontal: 80,
    flex: 1,
    height: 'auto',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
})