import {Dimensions} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { LinearGradient } from "expo-linear-gradient";

var React = require('react-native');

var { StyleSheet } = React

module.exports = StyleSheet.create({


	gradient1:{backgroundColor:"rgba(69,75,154, 1)"}, 
	//ungu
	gradient2:{backgroundColor:"rgba(233,120,99,1)"},
	//pink
	gradient3:{backgroundColor:"rgba(112,112,112,1)"},
	//grey
	gradient4:{backgroundColor:"rgba(78,82,146,1)"},
	//ungu juga\
	gradient5:{backgroundColor:"rgba(169,169,169,1)"},
	//dark gray

	backgroundColor99:{
		backgroundColor:'rgba(65, 18, 92,1)'
	},
	backgroundColor1: {
		backgroundColor:'rgba(45, 45, 54 , 1)'
	},
	backgroundColor2:{
		backgroundColor:'rgba(11, 25, 102 , 1)'
	},
	backgroundColor3:{
		backgroundColor:"rgba(220, 222, 232 , 1)"
	},
	backgroundColor5:{
		backgroundColor:"rgba(68, 68, 74 , 1)"
	},
	backgroundColor6:{
		backgroundColor:"#f3f3f3"
	},
	backgroundColor7:{
		backgroundColor:'#009688'
	},

	//fontSize and fontColor
	

	textColor1:{
		color:'#f2f2f2' ,
	},
	textColor2:{
		color:'#1c1c1c' ,
	},
	textColor3:{
		color:'rgba(30,100,70,1)'
	},
	textColor5:{
		color:'rgba(255, 148, 160,1)'
	},

	fontSize8:{
		fontSize: RFValue(8, Dimensions.get('window').height)
	},

	fontSize10:{
		fontSize: RFValue(10, Dimensions.get('window').height)
	},
	fontSize12:{
		fontSize: RFValue(12, Dimensions.get('window').height)
	},
	fontSize15:{
		fontSize: RFValue(15, Dimensions.get('window').height)
	},
	fontSize18:{
		fontSize: RFValue(18, Dimensions.get('window').height)
	},
	fontSize20:{
		fontSize: RFValue(20, Dimensions.get('window').height)
	},
	fontSize24:{
		fontSize: RFValue(24, Dimensions.get('window').height)
	},
	fontSize28:{
		fontSize: RFValue(28, Dimensions.get('window').height)
	},
	fontSize30:{
		fontSize: RFValue(30, Dimensions.get('window').height)
	},
	fontSize40:{
		fontSize: RFValue(40, Dimensions.get('window').height)
	},
	fontSize50:{
		fontSize: RFValue(50, Dimensions.get('window').height)
	},

	fontBottomTab:{
		fontSize: RFValue(21, Dimensions.get('window').height)
	},

	textBold: {
        fontWeight: 'bold'
    },

    textWhite:{
    	color:'rgba(255, 255, 255, 1)'
    },


    textGrey:{
    	color:'rgba(105, 105, 105, 1)'
    },

    textWhiteOp8:{
    	color:'rgba(255, 255, 255, 0.5)'
    },

	/// color

	softPurple:{
		backgroundColor:'#FF8427'
	},

	verySoftPurple:{
		backgroundColor: '#FF8427',
	},

	colorTopTab:{
		color:'#00afef'
	},

	iconColorBottomTab:{
		color: 'rgba(233, 120, 99,1)',
	},

	activeColorBottomTab:{
		color:'rgba(78,82,146,0.35)'
	},


	button01:{
		color:'#FFC800'
	},

	fontTheme1:{
		fontFamily: "sans-serif-medium",
		fontSize: 13
	},


	shadow99:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.00,
		elevation: 5,
	},

	shadow1:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 3,
	},
	shadow2:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	shadow3:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.43,
		shadowRadius: 9.51,
		elevation: 15,
	},

	card:{
		width:Dimensions.get('window').width/1.1,
		height:Dimensions.get('window').height/3.7,
		borderWidth:1,
		borderRadius:12,
		borderColor:'#fff',
	},

	cardHead:{
		height:Dimensions.get('window').height/20,
		borderTopLeftRadius:12,
		borderTopRightRadius:12,
		borderBottomWidth:1,
		borderColor:'#fff'
	},

	cardBody:{
		borderTopWidth:1,
		borderBottomWidth:0,
		borderColor:'#fff',
		borderColor:'rgba(45, 45, 54 , 1)'
	},

	cardBodyContain1:{
		borderRightWidth:0,
		borderColor:"#fff",
		width:Dimensions.get('window').width/1.5,
		height:Dimensions.get('window').height/8
	},

	cardBodyContain2:{
		borderRightWidth:0,
		borderColor:"#fff",
		width:Dimensions.get('window').width/4.5,
		height:Dimensions.get('window').height/8
	},

	cardBodyContain3:{
		marginTop:0,
		borderLeftWidth:0,
		borderColor:"#fff",
		width:Dimensions.get('window').width/1.5,
	},

	cardFoot:{

	},
	

});