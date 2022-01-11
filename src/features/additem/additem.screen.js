import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Button, ActivityIndicator, Colors, Switch } from "react-native-paper";
import TextInput from "react-native-text-input-interactive";
import styled from "styled-components/native";
import { AuthInput } from "../account/components/account.styles";
import InteractiveTextInput from "react-native-text-input-interactive";
import ModalSelector from "react-native-modal-selector";

import {
  addItemToDatabase,
  getItemsFromDatabase,
} from "../../services/authentication/authentication.service";

const ToggleArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

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
  const [isDelivery, setIsDelivery] = useState(false);
  const [isNegotiable, setIsNegotiable] = useState(false);

  const onToggleDeliverySwitch = () => setIsDelivery(!isDelivery);
  const onToggleNegotiableSwitch = () => setIsNegotiable(!isNegotiable);

  let index_condition = 0;
  const condition_data = [
    { key: index_condition++, section: true, label: "Condition" },
    { key: index_condition++, label: "Brand new" },
    { key: index_condition++, label: "Like new" },
    { key: index_condition++, label: "Very good" },
    { key: index_condition++, label: "Good" },
    { key: index_condition++, label: "Acceptable" },
  ];
  let index_category = 0;
  const category_data = [
    { key: index_category++, section: true, label: "Category" },
    { key: index_category++, label: "Books" },
    { key: index_category++, label: "Clothing" },
    { key: index_category++, label: "Electronics" },
    { key: index_category++, label: "Furniture" },
    { key: index_category++, label: "Games" },
    { key: index_category++, label: "Home" },
    { key: index_category++, label: "Sporting Goods" },
    { key: index_category++, label: "Toys" },
    { key: index_category++, label: "Vehicles" },
  ];

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
          Enter accurate information so others can find your item easily.
        </Text>
      </View>
      <ScrollView>
        <View style={{ marginTop: 52, alignItems: "center" }}>
          <InteractiveTextInput
            placeholder="Item Title"
            textInputStyle={{ width: windowWidth * 0.7 }}
          />
          <ButtonSpacer />
          <InteractiveTextInput
            placeholder="Brand"
            textInputStyle={{ width: windowWidth * 0.7 }}
          />
          <ButtonSpacer />
          <InteractiveTextInput
            placeholder="Price"
            textInputStyle={{ width: windowWidth * 0.7 }}
            keyboardType="decimal-pad"
          />
          <ButtonSpacer />
          <InteractiveTextInput
            placeholder="Description"
            multiline={true}
            textInputStyle={{ width: windowWidth * 0.7, height: 100 }}
          />
          <ButtonSpacer />
          <Text
            style={{
              color: "#373A36",
              letterSpacing: 1,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            Select the item's condition
          </Text>
          <ModalSelector
            style={styles.modal}
            data={condition_data}
            initValue="Condition"
            animationType="slide"
            selectStyle={{ backgroundColor: "#373A36" }}
            selectTextStyle={{ color: "white" }}
            onChange={(option) => null}
          />
          <Text
            style={{
              color: "#373A36",
              letterSpacing: 1,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            Select the item's category
          </Text>
          <ModalSelector
            style={styles.modal}
            data={category_data}
            initValue="Condition"
            animationType="slide"
            selectStyle={{ backgroundColor: "#373A36" }}
            selectTextStyle={{ color: "white" }}
            onChange={(option) => null}
          />
          <ButtonSpacer />
          <InteractiveTextInput
            placeholder="Defects (if any)"
            multiline={true}
            textInputStyle={{ width: windowWidth * 0.7, height: 75 }}
          />
          <ButtonSpacer />
          <ToggleArea>
            <Text
              style={{
                color: "#373A36",
                fontWeight: "bold",
                fontSize: 16,
                paddingRight: 10,
              }}
            >
              Can you deliver this item?
            </Text>
            <Switch
              value={isDelivery}
              onValueChange={onToggleDeliverySwitch}
              color="#CEB888"
            />
          </ToggleArea>
          <ButtonSpacer />
          <ToggleArea>
            <Text
              style={{
                color: "#373A36",
                fontWeight: "bold",
                fontSize: 16,
                paddingRight: 10,
              }}
            >
              Are you open to negotiating?
            </Text>
            <Switch
              value={isNegotiable}
              onValueChange={onToggleNegotiableSwitch}
              color="#CEB888"
            />
          </ToggleArea>
          <ButtonSpacer />
        </View>

        <Button onPress={() => addItemToDatabase(obj)}>Add Item</Button>
      </ScrollView>
    </AddItemSafeArea>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    alignContent: "center",
    padding: 10,
    color: "blue",
  },
});
