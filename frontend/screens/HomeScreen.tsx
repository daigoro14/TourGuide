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
      name: 'Food & Drinks',
      icon: <II name="restaurant" style={styles.icon}/>
    },
    {
      name: 'History & Culture',
      icon: <MCI name="book-open-variant" style={styles.icon}/>
    },
    {
      name: 'Health',
      icon: <AD name="heart" style={styles.icon}/>
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.content}>
          {/* <FlatList
          data={activities}
          renderItem={({ item, index }) => <AnimatedComponent about={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
                /> */}
          {activities.map((activity, index) => {
            const borderColor = [activeColor, '#ffd70e', '#3a3a3a'][index % 3];
            const additionalStyle = index !== 0 ? { marginTop: -60 } : {};
            return (
              <View key={index} style={[styles.iconContainer, index % 2 === 0 ? styles.icon1 : styles.icon2, additionalStyle]}>
                <View style={[styles.circle, {borderColor}]} >{activity.icon}</View>
                <Text>{activity.name}</Text>
              </View>
          )})}
          </View>
        </ScrollView>
        <Navigation currentPage="home"/>
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