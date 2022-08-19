import React, {useEffect, useState , useCallback , useMemo , Component , useRef  , forceUpdate}from 'react';
import { Platform, StyleSheet, TouchableHighlight, TouchableOpacity, 
TouchableNativeFeedback, TouchableWithoutFeedback , Button , TextInput, Dimensions , ImageBackground , Image , Animated 
,Text, View , YellowBox , ScrollView , BackHandler , Alert , InteractionManager} from 'react-native';
import {  useSelector , useDispatch, shallowEqual } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { AppearanceProvider , useColorScheme } from 'react-native-appearance';

// import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import {NavigationContainer, DefaultTheme , useFocusEffect } from '@react-navigation/native';

//user related function
import { getUser , resetLogin , UserFullName , UserType , UserId} from '../store/actions/cardActions'

import * as Google from 'expo-google-app-auth';
import { LinearGradient } from "expo-linear-gradient";
import axios from 'axios';

//google sign in
// import {
// 	GoogleSignin,
// 	GoogleSigninButton,
// 	statusCodes,
//   } from '@react-native-google-signin/google-signin';
  

const Theme = require('../hooks/Theme01.js')


export default function LoginScreen({navigation}) {
	let dispatch = useDispatch(); 
	const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

	const logo = require('../assets/628/logosalz50.png')

	const iosClientId = '';
	const androidClientId = '';

	const [userGoogleInfo,setUserGoogleInfo]=useState({});
	const [loaded,setLoaded]=useState(false)
	const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const statusLogin = useSelector ( state => state.page.statusLogin )

  let loginInfo = []

	const onChangeUsername = (e) =>{
		setUsername(e.nativeEvent.text)
		console.log(e.nativeEvent.text)
	}

	const onChangePassword = (e) =>{
		setPassword(e.nativeEvent.text)
		console.log(e.nativeEvent.text)
	}

	const onPressLogin = () => {
		console.log('onPressLogin');
		navigation.navigate('BottomTabNavigator1'
		// , {credential:'test'}
		);
	}

  const googleSignIn = () => {
    console.log('google sign in')
  }

return (
	<View style = {styles.container} >
		<LinearGradient
		style={styles.containerLoginInfo1}
		colors={["rgba(30,50,210, 1)", "rgba(69, 160, 217,1)"]}
		>
		</LinearGradient>
		<View style = {[styles.containerLoginInfo ]}
		colors={["rgba(69,75,200, 1)", "rgba(0,120,99,1)"]}>
		
			<View style  = {styles.containerLoginInfoLogo}>
				<View style={styles.imageLogo}
				onPress={() => onPressLogo()}>
					<Image
						style={styles.imageLogo}
						source={logo}
					/>
            	</View>
			</View>

			<View style  = {styles.containerLoginInfoUnamePassword}>
				<TextInput 
          style={styles.logininputUsername}
          value={username}
          onChange={onChangeUsername}
          textContentType='username'
          autoCapitalize='none'
          placeholder='username'
        >
        </TextInput>

				<TextInput 
					style={styles.logininputPassword}
					value={password}
					onChange={onChangePassword}
					secureTextEntry={true}
					autoCapitalize='none'
					placeholder='password'
		    >
		    </TextInput>

				<TouchableOpacity style={[styles.loginButton,Theme.shadow99]}
	        onPress={()=>onPressLogin()}>
				  <Text  style={[{color:'white' , fontWeight: 'bold'},Theme.fontSize24]}> Login </Text>
				</TouchableOpacity>

				{/* <GoogleSigninButton
					style={{ width: 192, height: 48 }}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Dark}
					onPress={()=>googleSignIn()}
					disabled={isSigninInProgress}
				/>; */}

			</View>
		</View>
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
  },

  stretch: {
    backgroundColor:'transparent',
    width:Dimensions.get('window').width*1,
    resizeMode: 'stretch',
  },

  containerLoginInfo:{
    width:'80%',
    height:'80%',
    backgroundColor: 'transparent',
    top:-Dimensions.get('window').height*0.4,

  },

  containerLoginInfo1:{
  width:'100%',
    height:'90%',
    top:Dimensions.get('window').height*0.45,
  },
  containerLoginInfoLogo:{
    flex:1,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center'
  },

  containerLoginInfoUnamePassword:{
    flex:3,
    backgroundColor:'transparent',
    alignItems:'center'
  },

	imageLogo:{

	},

  logininputUsername:{
    marginTop: '8%',
    width:'90%',
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "#333",
    color: "rgb(255,255,255)",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    opacity:1,
    fontSize:22,
    padding:'1.2%',
	},

	logininputPassword:{
    marginTop: '2%',
    width:'90%',
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "#333",
    color: "rgb(255,255,255)",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    opacity:1,
    fontSize:22,
    padding:'1.2%'
	},

  loginButton: {
    marginTop: '9%',
    width:'90%',
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(69, 140, 200,1)',
    borderRadius: 5,
    borderColor: "#333",
    color: "#333",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize:22,
    padding:'3.2%'
	},

	loginButtonGoogle: {
    marginTop: '5%',
    width:'100%',
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 0,
    borderColor: "#333",
    color: "#333",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    opacity:0.4,
    padding:'1.2%'
	},
})