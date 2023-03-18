import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import dataJSON from "./data.json";
import { Ionicons } from "@expo/vector-icons";

export default function MessagesScreen({ route }: any) {
  const [message, setMessage] = useState("");
  const [data, setData] = useState(dataJSON);
  const { id } = route.params;
  const chat = data.find((item) => item.id === id);

  const handleNewMessage = async () => {
    const newMessage = {
      content: message,
      createdAt: new Date().toISOString(),
      authorId: "user",
    };
    if (chat) {
      chat.messages.push(newMessage);
      setData([...data]);
    }
    setMessage("");
  };

  if (!chat) {
    return (
      <View>
        <Text>No chat found with id: {id}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 100,
      }}
    >
      <View style={{ width: "80%", marginTop: 20 }}>
        <FlatList
          data={chat.messages}
          keyExtractor={(message) => message.createdAt}
          renderItem={({ item: message }) => {
            const isUserMessage = message.authorId === "user";
            const author = isUserMessage ? "You" : chat.user.firstName;
            return (
              <View
                style={{
                  marginBottom: 10,
                  alignItems: isUserMessage ? "flex-end" : "flex-start",
                }}
              >
                <Text
                  style={{
                    textAlign: isUserMessage ? "right" : "left",
                    marginBottom: 5,
                    fontWeight: "bold",
                  }}
                >
                  {author}
                </Text>
                <View
                  style={{
                    backgroundColor: isUserMessage ? "#4169E1" : "#F2F2F2",
                    borderRadius: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 3,
                      color: isUserMessage ? "white" : "black",
                    }}
                  >
                    {message.content}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type a message"
            value={message}
            onChangeText={setMessage}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={handleNewMessage}
            style={styles.sendButton}
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#ccc",
    position: "absolute",
    height: 90,
    bottom: 0,
    left: 0,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#0084ff",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
