import React from 'react'
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'

export default function ZiqZaqListComponent({content}) {
  return (
    <View>
      {content.map((item, index) => {
        
        function reverseStyle(style1, style2) {
          return index % 2 === 0 ? style1 : style2
        }

        return (
          <View style={styles.product} key={index}>
            <View style={[styles.contentHeader, reverseStyle(styles.content1, styles.content2)]}>
              <Image source={item.frontPhoto} style={styles.image} />
              <View>
                <Text style={[styles.name, reverseStyle(styles.name1, styles.name2)]}>{item.name}</Text>
                <Text style={[reverseStyle(styles.name1, styles.name2)]}>{ '⭐️'.repeat(item.stars) }</Text>
              </View>
            </View>
            <Text style={[styles.description, reverseStyle(null, styles.textRight)]}>{item.description}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  product: {
    marginVertical: 40,
  },
  contentHeader: {
    alignItems: 'center',
  },
  content1: {
    flexDirection: 'row',
  },
  content2: {
    flexDirection: 'row-reverse',
  },
  image: {
    width: 100, // Specify your desired width
    height: 100, // Specify your desired height
    borderRadius: 40, // Make the image circular
    // marginRight: 15, // Add some margin to the right
    resizeMode: 'cover', // Or use 'contain', 'stretch', etc.
  },
  name: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  name1: {
    marginLeft: 15,
  },
  name2: {
    textAlign: 'right',
    marginRight: 15,
  },
  description: {
    marginTop: 5,
  },
  textRight: {
    textAlign: 'right',
  },
})