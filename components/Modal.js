import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Platform, Animated, Dimensions, Text, Image } from 'react-native';

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
  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    resizeMode: 'cover',
    alignSelf: 'center'
  },
  txtHeaderStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop:10
  },
  txtNormalStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
    marginTop:10
  },
  viewStyle:{
    padding:16
  }
})

const CustomModal = (data) => {
  const animated = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animated.current, {
      toValue: Math.min(height, 400),
      duration: 1000,
    }).start();
  }, []);

  console.log("Selected Data: " + JSON.stringify(data))
  console.log("Selected Data Name: " + JSON.stringify(data.data.name.title + " " + data.data.name.first + " " + data.data.name.last))
  console.log("Selected Data email: " + JSON.stringify(data.data.email))
  console.log("Selected Data phone: " + JSON.stringify(data.data.phone))
  console.log("Selected Data cell phone: " + JSON.stringify(data.data.cell))
  console.log("Selected Data Image: " + JSON.stringify(data.data.picture.medium))

  // full name, email, phone, cell phone, picture
  return (
    <View
      style={[s.root, /* { backgroundColor: '' } <-- animate this color */]}
      pointerEvents="box-none"
    >
      <Animated.View style={[s.modal, { height: animated.current }]}>

        <View style={s.viewStyle}>
          <Image style={s.imageStyle} source={{ uri: data.data.picture.large }}></Image>
          <Text style={s.txtHeaderStyle}>{"Name:  "} <Text style={s.txtNormalStyle}>{data.data.name.title + " " + data.data.name.first + " " + data.data.name.last}</Text></Text>
          <Text style={s.txtHeaderStyle}>{"Email:  "}<Text style={s.txtNormalStyle}> {data.data.email}</Text> </Text>
          <Text style={s.txtHeaderStyle}>{"Phone:  "}<Text style={s.txtNormalStyle}>{data.data.phone}</Text></Text>
          <Text style={s.txtHeaderStyle}>{"Cell Phone:  "} <Text style={s.txtNormalStyle}>{data.data.cell}</Text></Text>
        </View>



      </Animated.View>
    </View>
  );
};

export default CustomModal;