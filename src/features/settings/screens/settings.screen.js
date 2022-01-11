import React, { useContext, useState } from "react";
import { Text, Button, View, SafeAreaView } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: 16px;
`;

const AvatarView = styled.View`
  align-items: center;
  font-weight: bold;
`;

const UserEmailText = styled.Text`
  padding: 20px;
`;

export const SettingsScreen = ({ nagivation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const { image, setImage } = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView>
      <AvatarView>
        <Avatar.Icon size={200} icon="face" />
        <UserEmailText>{user.email}</UserEmailText>
      </AvatarView>
      <List.Section>
        <SettingsItem
          title="logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} icon="logout" />}
        />
      </List.Section>
      <List.Section>
        <SettingsItem
          title="Choose image"
          onPress={pickImage}
          left={(props) => <List.Icon {...props} icon="logout" />}
        />
        {image && console.log(image)}
      </List.Section>
    </SafeAreaView>
  );
};
