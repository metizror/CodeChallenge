import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Platform, Animated, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const s = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  modal: {
    width: Math.min(width - 40, 400),
    height: 200,
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: 'black',
    overflow: 'hidden',
  },
})

const CustomModal = () => {
  const animated = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animated.current, {
      toValue: Math.min(height, 400),
      duration: 1000,
    }).start();
  }, []);

  return (
    <View
      style={[s.root, /* { backgroundColor: '' } <-- animate this color */]}
      pointerEvents="box-none"
    >
      <Animated.View style={[s.modal, { height: animated.current }]}>

      </Animated.View>
    </View>
  );
};

export default CustomModal;