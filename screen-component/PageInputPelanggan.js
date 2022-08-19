import React, {useEffect, useState , useCallback , useMemo , Component , useRef  , forceUpdate}from 'react';
import { Platform, StyleSheet, TouchableHighlight, TouchableOpacity, 
TouchableNativeFeedback, TouchableWithoutFeedback , Button , TextInput, Dimensions , ImageBackground , Image , Animated 
,Text, View , YellowBox , ScrollView , BackHandler , Alert , InteractionManager} from 'react-native';
import {  useSelector , useDispatch, shallowEqual } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { AppearanceProvider , useColorScheme } from 'react-native-appearance';

export default function PageInputPelangaan({navigation,changeModalVisibleState,changeModalInputState}) {

  const closingAndReseting = () => {
    changeModalInputState(1)
    changeModalVisibleState('tutup modal otomatis')
  }

  const [name,setName] = useState('')
  const [noTelp, setNoTelp] = useState(null);

  return(
    <View style={{flex:1,justifyContent:'space-between'}}>
      <Text> Page Input Kendaraan </Text>
      <View style={{height:'80%',backgroundColor:'#fff'}}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNoTelp}
          value={noTelp}
          placeholder="No.Telphone"
          keyboardType="numeric"
        />
      </View>
      <View style={{marginBottom:'5%'}}>
        <Button 
        onPress={()=>changeModalInputState(2)}
        title='OK'>
        </Button>
      </View>
    </View>
  )

}
