import React, { useEffect } from "react";
import { Platform, StyleSheet, TouchableHighlight, TouchableOpacity, 
  TouchableNativeFeedback, TouchableWithoutFeedback , Button , TextInput, Dimensions , ImageBackground , Image , Animated 
  ,Text, View , YellowBox , BackHandler , Alert , KeyboardAvoidingView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux'
import { AppearanceProvider , useColorScheme } from 'react-native-appearance';

import { StatusBar } from 'expo-status-bar';
import { Feather , AntDesign , MaterialCommunityIcons   } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';

//navigator
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//navigator


//screen
import Store from './store'
import LoginPage from './screens/LoginPage'
import HomePage from './screens/HomePage'
import HomePageList from './screen-component/HomePageList'
import PageInputKendaraan from './screen-component/PageInputKendaraan'
// import PageInputPelangaan from './screen-component/PageInputPelangaan'
//screen




const Stack = createStackNavigator();
const Theme = require('./hooks/Theme01.js')
// const Tabs = AnimatedTabBarNavigator();
const Tabs = createBottomTabNavigator();
const scheme = 'dark'
const logo = require('./assets/628/logosalz50.png')



export default function App() {

  function onPressLogo(){
    alert('JU')
  }


  return (
    <SafeAreaProvider>
      <Provider store = {Store}>
        <AppearanceProvider>
          <NavigationContainer theme={scheme === 'dark' ? DefaultTheme : DefaultTheme}>
          <Stack.Navigator 
            unmountInactiveRoutes = 'true'
            initialRouteName='LoginPage'
            screenOptions={{
              headerShown: true,
              headerLeft: null,
              unmountInactiveRoutes : true
            }}
          >
            <Stack.Screen name="LoginPage" component={LoginPage} 
              options={{
              headerShown: false,
              headerTitle:(props)=>(
                <TouchableHighlight onPress={() => onPressLogo()}>
                  <Image
                  style={styles.logo}
                  source={logo}
                  resizeMode='contain'
                  />
                </TouchableHighlight>
              ),
                headerTitleStyle: { flex: 1, textAlign: 'center' },
                headerStyle: {
                  height:Dimensions.get('window').height*0.11,
                  backgroundColor: Theme.colorTopTab.color,
              },
                headerTintColor: '#fff',
              }}
            />

            <Stack.Screen name="BottomTabNavigator1" component={BottomTabNavigator1}
              options={{
              headerShown: true,
              headerTitle:(props)=>(
                <Image
                style={styles.logo}
                source={logo}
                resizeMode='contain'
              />
              ),
                headerTitleStyle: { flex: 1, textAlign: 'center' },
                headerStyle: {
                  height:Dimensions.get('window').height*0.115,
                  backgroundColor: Theme.colorTopTab.color,
              },
                headerTintColor: '#fff',
              }}
            />
            
            <Stack.Screen name="PageInputKendaraan" component={PageInputKendaraan} 
              options={{
              headerShown: true,
              headerTitle:(props)=>(
                <TouchableHighlight onPress={() => onPressLogo()}>
                  <Text> Input Kendaraan </Text>
                </TouchableHighlight>
              ),
                headerTitleStyle: { flex: 1, textAlign: 'center' },
                headerStyle: {
                  backgroundColor: '#fff',
                }
              
              }}
            />


          </Stack.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </Provider>
    <StatusBar />
    </SafeAreaProvider>
  );
}


function BottomTabNavigator1() {
  return (
  <Tabs.Navigator
      screenOptions={{
          tabBarLabel:'test',
          activeTintColor: Theme.iconColorBottomTab.color,
              activeBackgroundColor : 'transparent',
              initialRouteName: 'Home',
              tabStyle:{
                  marginTop:(Platform.OS === 'ios') ? 0 : 0,
                  height : Dimensions.get('window').height*0.07,
                  flexDirection: 'row',
                  borderTopLeftRadius:25,
                  borderTopRightRadius:25,
                  shadowColor: "#000",
                  shadowOffset: {
                      width: 0,
                      height: 3,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.00,
                  elevation: 5,
              }
      }}
      appearance={
          {
              //whenInactiveShow : "icon-only",
              //whenActiveShow:"icon-only"
          }
      }
  >
  <Tabs.Screen initialRouteName="Home" name="HomeTestName00" component={HomePage}
      options={
          {   headerShown: false,
              tabBarLabel:"Home",
              tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                      name="home"
                      size={Theme.fontBottomTab.fontSize}
                      focused={focused}
                      color={Theme.iconColorBottomTab.color}
                  />
              )

          }
      }/>
  <Tabs.Screen initialRouteName="SurveyList" name="SurveyTestName00" component={HomePageList}
      options={
          {   
              headerShown: false,
              tabBarLabel:"Survey List",
              tabBarIcon: ({ focused, color, size }) => (
                  <Feather
                      name="list"
                      size={Theme.fontBottomTab.fontSize}
                      focused={focused}
                      color={Theme.iconColorBottomTab.color}
                  />
              )

          }
      }/>
  <Tabs.Screen name="Profile" component={HomePage}
      options={
          {
              tabBarLabel:"Profile",
              tabBarIcon: ({ focused, color, size }) => (
                  <AntDesign
                    name="profile"
                    size={Theme.fontBottomTab.fontSize}
                    focused={focused}
                    color={Theme.iconColorBottomTab.color}
                  />
              )
          }
      }/>
  </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({
  logo:{ 
        width:Dimensions.get('window').width/10, 
        height:Dimensions.get('window').height/10, 
  },

})
