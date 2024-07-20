import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';

const AnimatedComponent = ({ about, index }) => {
  const slideAnim = useRef(new Animated.Value(index % 2 === 0 ? -300 : 300)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim, opacityAnim]);

  const slideStyle = {
    transform: [{ translateX: slideAnim }],
    opacity: opacityAnim,
  };

  return (
    <Animated.View style={[styles.aboutContainer, index % 2 === 0 ? styles.about1 : styles.about2, slideStyle]}>
      <Text style={styles.aboutHeader}>{about.name}</Text>
      <View style={styles.aboutInfo}>
        <View style={styles.imageContainer}>
            {about.icon}
          <Image style={index % 2 === 0 ? styles.aboutImgLeft : styles.aboutImgRight} source={{ uri: about.img }} />
        </View>
        <Text style={styles.aboutDescription}>{about.description}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  about1: {
    flexDirection: 'row',
  },
  about2: {
    flexDirection: 'row-reverse',
  },
  aboutHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flexShrink: 0,
  },
  aboutImgLeft: {
    width: 100,
    height: 100,
    marginRight: 25,
  },
  aboutImgRight: {
    width: 100,
    height: 100,
    marginLeft: 25,
  },
  aboutDescription: {
    fontSize: 16,
    flexShrink: 1,
    textAlign: 'left',
  },
});

export default AnimatedComponent;