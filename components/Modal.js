import React, { useEffect, useRef, Component } from 'react';
import { View, StyleSheet, Platform, Easing, Animated, Dimensions, Text, Image, TouchableOpacity, UIManager } from 'react-native';

const { width, height } = Dimensions.get('window');

const s = StyleSheet.create({
  root: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    top: 0,
    left: 0,
    right:0,
    bottom:0,
    width: '100%',
    height: '100%',
  },
  modal: {
    width: Math.min(width - 30, 400),
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
    marginTop: 10
  },
  txtNormalStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
    marginTop: 10
  },
  viewStyle: {
    padding: 16,
    backgroundColor:'white'
  },
  closeBtnStyle: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    alignSelf: 'flex-end'
  }
})

export default class CustomModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      animated: new Animated.Value(0)
    }
  }

  startAnimation = () => {
    Animated.timing(this.state.animated, {
      toValue: Math.min(height, 400),
      duration: 1000,
    }).start();
  }

  // Animated.timing(this.state.animated, {
  //   toValue: 100,
  //   duration: 500
  // }).start()


  render() {
    let { data, onpress } = this.props
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.startAnimation()

    return (
      <View
        style={[s.root, /* { backgroundColor: '' } <-- animate this color */]}
        pointerEvents="box-none"
      >
        <Animated.View style={[s.modal, { height: this.state.animated }]}>

          <View style={s.viewStyle}>
            <TouchableOpacity onPress={onpress}>
              <Image style={s.closeBtnStyle} source={require('../assets/close.png')}></Image>
            </TouchableOpacity>
            <Image style={s.imageStyle} source={{ uri: data.picture.large }}></Image>
            <Text style={s.txtHeaderStyle}>{"Name:  "} <Text style={s.txtNormalStyle}>{data.name.title + " " + data.name.first + " " + data.name.last}</Text></Text>
            <Text style={s.txtHeaderStyle}>{"Email:  "}<Text style={s.txtNormalStyle}> {data.email}</Text> </Text>
            <Text style={s.txtHeaderStyle}>{"Phone:  "}<Text style={s.txtNormalStyle}>{data.phone}</Text></Text>
            <Text style={s.txtHeaderStyle}>{"Cell Phone:  "} <Text style={s.txtNormalStyle}>{data.cell}</Text></Text>
          </View>



        </Animated.View>
      </View>
    );
  }
}

// const CustomModal = (data, onpress) => {
//   const animated = useRef(new Animated.Value(0));
//   useEffect(() => {
//     Animated.timing(animated.current, {
//       toValue: Math.min(height, 400),
//       duration: 1000,
//     }).start();
//   }, []);

//   console.log("Selected Data: " + JSON.stringify(data))
//   console.log("Selected Data Name: " + JSON.stringify(data.data.name.title + " " + data.data.name.first + " " + data.data.name.last))
//   console.log("Selected Data email: " + JSON.stringify(data.data.email))
//   console.log("Selected Data phone: " + JSON.stringify(data.data.phone))
//   console.log("Selected Data cell phone: " + JSON.stringify(data.data.cell))
//   console.log("Selected Data Image: " + JSON.stringify(data.data.picture.medium))

//   // full name, email, phone, cell phone, picture
//   return (
//     <View
//       style={[s.root, /* { backgroundColor: '' } <-- animate this color */]}
//       pointerEvents="box-none"
//     >
//       <Animated.View style={[s.modal, { height: animated.current }]}>

//         <View style={s.viewStyle}>
//           <TouchableOpacity onPress={onpress}>
//             <Image style={s.closeBtnStyle} source={require('../assets/close.png')}></Image>
//           </TouchableOpacity>
//           <Image style={s.imageStyle} source={{ uri: data.data.picture.large }}></Image>
//           <Text style={s.txtHeaderStyle}>{"Name:  "} <Text style={s.txtNormalStyle}>{data.data.name.title + " " + data.data.name.first + " " + data.data.name.last}</Text></Text>
//           <Text style={s.txtHeaderStyle}>{"Email:  "}<Text style={s.txtNormalStyle}> {data.data.email}</Text> </Text>
//           <Text style={s.txtHeaderStyle}>{"Phone:  "}<Text style={s.txtNormalStyle}>{data.data.phone}</Text></Text>
//           <Text style={s.txtHeaderStyle}>{"Cell Phone:  "} <Text style={s.txtNormalStyle}>{data.data.cell}</Text></Text>
//         </View>



//       </Animated.View>
//     </View>
//   );
// };

// export default CustomModal;