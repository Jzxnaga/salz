import React, {useEffect, useState , useCallback , useMemo , Component , useRef  , forceUpdate}from 'react';
import { Platform, StyleSheet, TouchableHighlight, TouchableOpacity, 
TouchableNativeFeedback, TouchableWithoutFeedback , Button , TextInput, Dimensions , ImageBackground , Image , Animated 
,Text, View , YellowBox , ScrollView , BackHandler , Alert , InteractionManager , Modal , Pressable} from 'react-native';
import {  useSelector , useDispatch, shallowEqual } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { AppearanceProvider , useColorScheme } from 'react-native-appearance';

import HomePageList from '../screen-component/HomePageList'
import CustomMaterialMenu from '../screen-component/CustomMaterialMenu';
import PageInputKendaraan from '../screen-component/PageInputKendaraan';
import PageInputPelanggan from '../screen-component/PageInputPelanggan';
import SearchListDropdown from '../screen-component/SearchListDropdown';

export default function HomePage({navigation,route}) {
  let dispatch = useDispatch(); 

  const [number, onChangeNumber] = React.useState(null);

  const leasings = ["ALL","BFI", "SMART", "WOM", "BAF", "5", "6", "7"];

	// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
  const logo = require('../assets/628/logosalz50.png')

  const onPressSearch = () =>{
    console.log('test')
    navigation.navigate('PageInputKendaraan')
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [modalInputState,setModalInputState] = useState(1)

  const changeModalVisibleState = (visibleState) =>{
    setModalVisible(!modalVisible)
    Alert.alert(visibleState)
  }
  const changeModalInputState = (pageNumber) =>{
    console.log(pageNumber)
    setModalInputState(pageNumber)
  }

  const closingAndReseting = () => {
    changeModalInputState(1)
    changeModalVisibleState('tutup modal di home')
  }




  return(
    
    <ScrollView contentContainerStyle={styles.container} 
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    >

      {/* Head */}
      <View style = {styles.calculationContainer}>
        <View style = {styles.calculationIn}>
          <Text>Komisi</Text>
          <Text>10.000</Text>
        </View>
        <View style = {styles.calculationIn}>
          <Text>Bonus</Text>
          <Text>10.000</Text>
        </View>
        <View style = {styles.calculationIn}>
          <Text>Referal</Text>
          <Text>10.000</Text>
        </View>
      </View>

      {/* Body2 */}
      <View style={styles.searchContainer}>
        <Text>Pagi,{} mau isi apa hari ini</Text>
        <View style={styles.searchBody}>
          <SearchListDropdown/>
          <Pressable
          style={styles.buttonSearch}
          onPress={() => setModalVisible(true)}
          ><Text>QQQQ</Text></Pressable>
        </View>
      </View>
      {/* Body3 */}
      <View style = {styles.bodyListContainer}>
        <View style={styles.bodyHeadScrollContainer}>
          <ScrollView horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.bodyHeadScroll]}>
          {leasings.map((obj, index) => (
            <TouchableOpacity key={index} style={styles.nearbyStoresItems}>
              <View
                style={[styles.nearbyStoresImages]}
              >
                <Text>{obj}</Text>
              </View>
            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>
        
        <View>
          <Text>ISINYA</Text>
        </View>
      </View>

      {/*nih isinya modal */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            changeModalVisibleState();
          }}>
  
            <View style={styles.modalView}>
              <View style={styles.modalBox}>
                <View style={{alignItems:'flex-end'}}>
                  <Pressable
                    style={[styles.buttonClose]}
                    onPress={() => closingAndReseting()}>
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable>
                </View>
                

                {modalInputState==1 &&
                  <PageInputKendaraan 
                  changeModalVisibleState = {visibleState=>changeModalVisibleState(visibleState)}
                  changeModalInputState = {(pageNumber)=>changeModalInputState(pageNumber)}
                  ></PageInputKendaraan>
                }
                
                {modalInputState==2 &&
                  <PageInputPelanggan 
                  changeModalVisibleState = {visibleState=>changeModalVisibleState(visibleState)}
                  changeModalInputState = {(pageNumber)=>changeModalInputState(pageNumber)}
                  ></PageInputPelanggan>
                }
              </View>
              
            </View>
          
        </Modal>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    height:Dimensions.get('window').height*0.87,
    justifyContent: "center",
    alignItems: "center" 
  },
  calculationContainer:{
    width:'90%',
    height:'10%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'5%',
    marginBottom:'2%',
    flexDirection:'row',
    borderRadius:60,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  calculationIn:{
    width:'25%',
    height:'90%',
    marginHorizontal:'1%',
    borderRightWidth:1,
    borderLeftWidth:1,
    backgroundColor:'white',
    justifyContent:'space-evenly',
    alignItems:'center'
  },


  searchContainer:{
    width:'100%',
    height:'20%',
    padding:'2%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'2%',
    flexDirection:'column',
    borderRadius:0,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

  },

  searchBody:{
    margin:'4%',
    flexDirection:'row',
  },

  input: {
    height: '100%',
    width:'90%',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },

  //{/* LIST STYLE */}
  
  bodyListContainer:{
    width:'90%',
    height:'60%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius:25,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },

  bodyHeadScrollContainer:{
    marginTop:'5%',
    height:'20%',
    backgroundColor:'#fff'
  },
  bodyHeadScroll: {
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  nearbyStoresItems: {
    marginHorizontal: 2,
    borderColor: '#1D5098'
  },
  nearbyStoresImages: {
    width: 120,
    height: 80,
    backgroundColor: 'gray',
    alignItems:'center',
    justifyContent:'center'
  },


  //modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },



  //all view modal 
  modalView: {
    // marginVertical:Dimensions.get('window').height*0.070,
    width: '100%',
    height: Dimensions.get('window').height*1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    backgroundColor: 'white',
    backgroundColor:'rgba(0,0,0,0.4)',
    justifyContent:'center',
    alignItems:'center',
  },
  modalBox:{
    width:'80%',
    height:'80%',
    borderRadius:20,
    opacity:1,
    backgroundColor:'white',
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.00,

    elevation: 24,
  },
  buttonSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'15%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
    borderLeftWidth:0,
    borderWidth:1.5,
    borderColor:'grey'
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    borderRadius: 0,
    width: 40,
    height:40,
    padding: 10,
    elevation: 2,
    backgroundColor: '#000',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  })