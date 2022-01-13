import React, { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput as TextInp,
  ImagePickerIOS,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  ActivityIndicator,
  Colors,
  Switch,
  Avatar,
} from "react-native-paper";
import TextInput from "react-native-text-input-interactive";
import styled from "styled-components/native";
import InteractiveTextInput from "react-native-text-input-interactive";
import ModalSelector from "react-native-modal-selector";
import AwesomeButton from "react-native-really-awesome-button";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

import { AuthInput } from "../account/components/account.styles";

import {
  addItemToDatabase,
  getItemsFromDatabase,
  uploadImageToDatabase,
} from "../../services/authentication/authentication.service";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

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

const PicturesView = styled.View`
  padding-top: 10px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SinglePhotoView = styled.View`
  padding: 15px;
`;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const AddItemScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [category, setCategory] = useState("");
  const [defects, setDefects] = useState("");
  const [brand, setBrand] = useState("");
  const [isDelivery, setIsDelivery] = useState(false);
  const [isNegotiable, setIsNegotiable] = useState(false);

  const onToggleDeliverySwitch = () => setIsDelivery(!isDelivery);
  const onToggleNegotiableSwitch = () => setIsNegotiable(!isNegotiable);

  const { onLogout, user } = useContext(AuthenticationContext);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image1file, setImage1file] = useState(null);
  const [image2file, setImage2file] = useState(null);

  const [cameraPermission, setCameraPermission] = useState(null);

  const pickImage1 = async () => {
    setCameraPermission(await Camera.requestCameraPermissionsAsync());

    if (cameraPermission) {
      console.log("Granted...");
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: data.uri.substring(
            data.uri.lastIndexOf("/") + 1,
            data.uri.length
          ),
        };
        setImage1(data.uri);
        setImage1file(newfile);
      }
    }
  };

  const pickImage2 = async () => {
    setCameraPermission(await Camera.requestCameraPermissionsAsync());

    if (cameraPermission) {
      console.log("Granted...");
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: data.uri.substring(
            data.uri.lastIndexOf("/") + 1,
            data.uri.length
          ),
        };
        console.log(newfile.name);
        console.log(newfile.uri);
        setImage2(data.uri);
        setImage2file(newfile);
      }
    }
  };

  const createObject = async () => {
    let file1url = "";
    let file2url = "";
    try {
      file1url = await uploadImageToDatabase(image1file);
      file2url = await uploadImageToDatabase(image2file);
      console.log(file1url);
      console.log(file2url);
    } catch (e) {
      console.log(e);
    }

    let item = {
      name: name,
      brand: brand,
      price: price,
      description: description,
      defects: defects,
      condition: condition,
      category: category,
      isDelivery: isDelivery,
      isNegotiable: isNegotiable,
      photos: [file1url, file2url],
    };
    addItemToDatabase(item, user);
    console.log("Added item to database.");
  };

  // const createObject = async () => {
  //   let file1url = "";
  //   let file2url = "";
  //   await uploadImageToDatabase(image1file)
  //     .then((url) => {
  //       file1url = url;
  //     })
  //     .catch((e) => {
  //       console.log("Error uploading image 1, ", e);
  //     });
  //   await uploadImageToDatabase(image2file)
  //     .then((url) => {
  //       file2url = url;
  //     })
  //     .catch((e) => {
  //       console.log("Error uploading image 2, ", e);
  //     });
  //   let photos = [];
  //   photos.push(file1url);
  //   photos.push(file2url);
  //   console.log("ARRAY IS ", photos);
  //   let item = {
  //     name: name,
  //     brand: brand,
  //     price: price,
  //     description: description,
  //     defects: defects,
  //     condition: condition,
  //     category: category,
  //     isDelivery: isDelivery,
  //     isNegotiable: isNegotiable,
  //     photos: photos,
  //   };
  //   addItemToDatabase(item, user);
  // };

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
        <View
          style={{ marginTop: 52, alignItems: "center", paddingBottom: 200 }}
        >
          <InteractiveTextInput
            placeholder="Item Title"
            value={name}
            onChangeText={(i) => setName(i)}
            textInputStyle={{ width: windowWidth * 0.7 }}
          />
          <ButtonSpacer />
          <InteractiveTextInput
            placeholder="Brand"
            value={brand}
            onChangeText={(i) => setBrand(i)}
            textInputStyle={{ width: windowWidth * 0.7 }}
          />
          <ButtonSpacer />
          <InteractiveTextInput
            placeholder="Price"
            value={price}
            onChangeText={(i) => setPrice(i)}
            textInputStyle={{ width: windowWidth * 0.7 }}
            keyboardType="decimal-pad"
          />
          <ButtonSpacer />
          <InteractiveTextInput
            placeholder="Description"
            value={description}
            onChangeText={(i) => setDescription(i)}
            multiline={true}
            blurOnSubmit={true}
            returnKeyType="done"
            textInputStyle={{ width: windowWidth * 0.7, height: 100 }}
          />
          <ButtonSpacer />

          <InteractiveTextInput
            placeholder="Defects (if any)"
            value={defects}
            onChangeText={(i) => setDefects(i)}
            multiline={true}
            blurOnSubmit={true}
            returnKeyType="done"
            textInputStyle={{ width: windowWidth * 0.7, height: 75 }}
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
            animationType="fade"
            data={condition_data}
            textInputStyle={{ width: windowWidth * 0.7, height: 50 }}
            initValue="Select condition..."
            onChange={(option) => {
              setCondition(option.label);
            }}
          >
            <TextInput
              style={styles.modal}
              textInputStyle={{ width: windowWidth * 0.7, height: 50 }}
              editable={false}
              placeholder="Select condition..."
              value={condition}
            />
          </ModalSelector>
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
            animationType="fade"
            textInputStyle={{ width: windowWidth * 0.7, height: 50 }}
            initValue="Select caterory..."
            onChange={(option) => {
              setCategory(option.label);
            }}
          >
            <TextInput
              style={styles.modal}
              textInputStyle={{ width: windowWidth * 0.7, height: 50 }}
              editable={false}
              placeholder="Select category..."
              value={category}
            />
          </ModalSelector>
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
          <ButtonSpacer />
          <Text
            style={{
              color: "#373A36",
              fontWeight: "bold",
              fontSize: 20,
              paddingRight: 10,
            }}
          >
            Add up to 2 pictures
          </Text>
          <PicturesView>
            <SinglePhotoView>
              <TouchableOpacity onPress={() => pickImage1()}>
                {!image1 && (
                  <Avatar.Icon
                    size={100}
                    backgroundColor="#373A36"
                    icon="plus"
                  />
                )}
                {image1 && <Avatar.Image size={100} source={{ uri: image1 }} />}
              </TouchableOpacity>
            </SinglePhotoView>
            <SinglePhotoView>
              <TouchableOpacity onPress={() => pickImage2()}>
                {!image2 && (
                  <Avatar.Icon
                    size={100}
                    backgroundColor="#373A36"
                    icon="plus"
                  />
                )}
                {image2 && <Avatar.Image size={100} source={{ uri: image2 }} />}
              </TouchableOpacity>
            </SinglePhotoView>
          </PicturesView>

          <AwesomeButton
            onPress={() => {
              createObject();
              navigation.goBack();
            }}
          >
            Add Item
          </AwesomeButton>
        </View>
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
  textinp: {
    backgroundColor: "#373A36",
    color: "white",
  },
});
