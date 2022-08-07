import React, {useEffect, useState , useCallback , useMemo , Component , useRef  , forceUpdate}from 'react';
import { Platform, StyleSheet, TouchableHighlight, TouchableOpacity, 
TouchableNativeFeedback, TouchableWithoutFeedback , Button , TextInput, Dimensions , ImageBackground , Image , Animated 
,Text, View , YellowBox , ScrollView , BackHandler , Alert , InteractionManager} from 'react-native';
import {  useSelector , useDispatch, shallowEqual } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { AppearanceProvider , useColorScheme } from 'react-native-appearance';

export default function HomePage({navigation}) {
  let dispatch = useDispatch(); 
	// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
  const logo = require('../assets/628/logosalz50.png')

  return(
    <View style = {styles.container} >

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      width:Dimensions.get('window').width*1,
      height:Dimensions.get('window').height*1.1,
        backgroundColor: 'white',
        justifyContent: 'center',
          alignItems: 'center',
          // flex: 1,
      // justifyContent: "center",
      // alignItems: "center"
      }
    })