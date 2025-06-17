import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
// ICONS FROM:
// https://oblador.github.io/react-native-vector-icons/
import Hotel from 'react-native-vector-icons/FontAwesome';
import Home from 'react-native-vector-icons/Entypo';
import Phone from 'react-native-vector-icons/Foundation';

export default function Navigation({ currentPage, navigation }) {
    const activeColor = '#ff6f6f';
    const inactiveColor = '#c1c1c1';

  return (
    <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Hotels')}>
            <Hotel 
                name="hotel" 
                color={currentPage === 'hotel' ? activeColor : inactiveColor} 
                style={styles.navIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Home 
                name="home" 
                color={currentPage === 'home' ? activeColor : inactiveColor} 
                style={styles.navIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Telephone')}>
            <Phone 
                name="telephone" 
                color={currentPage === 'telephone' ? activeColor : inactiveColor} 
                style={[styles.navIcon, { transform: [{ scaleX: -1 }] }]}
            />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Book')}>
            <Book name="book-open-variant" style={styles.navIcon} />
        </TouchableOpacity> */}
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
