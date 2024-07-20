import React from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
// ICONS FROM:
// https://oblador.github.io/react-native-vector-icons/
import Hotel from 'react-native-vector-icons/FontAwesome';
import Home from 'react-native-vector-icons/Entypo';
import Phone from 'react-native-vector-icons/Foundation';


export default function Navigation(props: any) {
    const currentpage = props.currentPage;
    const activeColor = '#ff6f6f';
    const inactiveColor = '#c1c1c1';

  return (
    <View style={styles.nav}>
        <Hotel 
            name="hotel" 
            color={currentpage === 'hotel' ? activeColor : inactiveColor} 
            style={styles.navIcon}
        />
        <Home 
            name="home" 
            color={currentpage === 'home' ? activeColor : inactiveColor} 
            style={styles.navIcon}
        />
        <Phone 
            name="telephone" 
            color={currentpage === 'telephone' ? activeColor : inactiveColor} 
            style={[styles.navIcon, { transform: [{ scaleX: -1 }] }]}
        />
        {/* <Book name="book-open-variant" style={styles.navIcon}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
    nav: {
        borderTopWidth: 0.2, // Set the border width
        borderTopColor: '#c1c1c1', // Set the border color
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 25,
        flexDirection: 'row'
    },
    navIcon: {
        fontSize: 40 ,
    }
    })
