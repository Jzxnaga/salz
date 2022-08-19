import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList
} from "react-native";
import axios from "axios";

const HomePageList = () => {
  const [LessorInfo, setLessorInfo] = useState([]);

  useEffect(() => {
    const getLessorInfo = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `https://reqres.in/api/users?page=1`
        });
        setLessorInfo(res.data.data);
      } 
      
      catch (error) {
        console.error(error);
      }
    };
    getLessorInfo();
  }, []);

  // Destructuring data, This passed from Flatlist > data prop
  const renderLessorInfo = ({ first_name, last_name, email, avatar }) => {
    return (
      <View style={styles.list}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
          resizeMode="center"
        />

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text>
            {first_name} {last_name}
          </Text>
          <Text>{email}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={LessorInfo}
        renderItem={({ item }) => renderLessorInfo(item)}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 8,
    backgroundColor: "#e9e9e9",
    marginVertical: 2,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  avatar: {
    width: 50,
    height: 50
  }
});

export default HomePageList;