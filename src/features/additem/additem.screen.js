import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { Button, ActivityIndicator, Colors } from "react-native-paper";
import TextInput from "react-native-text-input-interactive";
import styled from "styled-components/native";
import { AuthInput } from "../account/components/account.styles";
import InteractiveTextInput from "react-native-text-input-interactive";
import {
  addItemToDatabase,
  getItemsFromDatabase,
} from "../../services/authentication/authentication.service";

const AddItemSafeArea = styled.SafeAreaView`
  background-color: #9d968d;
  flex: 1;
`;

const InputArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonSpacer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const obj = {
  placeId: 1,
  name: "iPhone XX",
  price: "499",
  isNegotiable: true,
  isDelivery: true,
  description: "iPhone X 64GB Silver",
  brand: "Apple",
  condition: "Used",
  category: "Electronics",
};

export const AddItemScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  return (
    <AddItemSafeArea>
      <View style={{ margin: 24 }}>
        <Text style={{ color: "#373A36", fontWeight: "bold", fontSize: 32 }}>
          Let's get your item sold 💸
        </Text>
        <Text
          style={{
            color: "#373A36",
            letterSpacing: 1,
            marginTop: 8,
            fontWeight: "bold",
          }}
        >
          Enter accurate information so others can find your item easily!
        </Text>
      </View>

      <View style={{ marginTop: 52, alignItems: "center" }}>
        <InteractiveTextInput textInputStyle={{ width: windowWidth * 0.7 }} />
        <ButtonSpacer />
        <InteractiveTextInput
          placeholder="Password"
          secureTextEntry
          textInputStyle={{ width: windowWidth * 0.7 }}
        />
        <ButtonSpacer />
        <Button onPress={() => addItemToDatabase(obj)}>Add Item</Button>
      </View>
    </AddItemSafeArea>
  );
};
