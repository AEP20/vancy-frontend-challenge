import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import data from "./data.json";
import { useNavigation } from "@react-navigation/native";

export default function Main() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
        )}
        renderItem={({ item }) => (

          <View
          style={{
            display: "flex",
            flexDirection: "column",
            height: 70,
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft:10,
          }}>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("MessagesScreen" as never, {id: item.id } as never)
            }}
            >
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", paddingRight:10}}>
              <View style={{display:"flex", flexDirection:"row"}}>
                <Text style={{fontWeight:"bold"}}>{item.user.firstName}</Text>
                <Text style={{marginLeft:4, fontWeight:"bold"}}>{item.user.lastName}</Text>
              </View>
              <Text style={{color:"grey"}}>{item.messages.length > 0 && item.messages[item.messages.length - 1].createdAt}</Text>
            </View>
            <View style={{width:"100%"}}>
              <Text style={{marginTop:10}}>{item.messages.length > 0 && item.messages[item.messages.length - 1].content}</Text>
            </View>
            </TouchableOpacity>

          </View>
        )}
      />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    backgroundColor:"#fff",
  },
});
