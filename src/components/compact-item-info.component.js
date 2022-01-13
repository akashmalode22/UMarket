import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Text } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 75px;
  height: 75px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactItemInfo = ({ item }) => {
  const Image = CompactImage;
  return (
    <Item>
      <Image source={{ uri: item.photos[0] }} />
      <Text>{item.name}</Text>
    </Item>
  );
};
