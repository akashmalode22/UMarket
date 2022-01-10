import React, { useContext } from "react";
import { Text, Button, View, SafeAreaView } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

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
    </SafeAreaView>
  );
};
