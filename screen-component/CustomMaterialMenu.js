// React Native Popup Menu – Over Flow Menu
// https://aboutreact.com/react-native-popup-menu/

import React from 'react';
//import react in our code.
import { View, Text, Image, TouchableOpacity , StyleSheet} from 'react-native';
//import all the components we are going to use.
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import menu and menu item

export default function CustomMaterialMenu  (props)  {
  let _menu = null;

  return (
    <View style={props.menustyle}>
      <Text onPress={() => _menu.show()} style={props.textStyle}>
        test
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menustyle:{
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})