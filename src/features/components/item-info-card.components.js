import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../utils/colors";

const Title = styled.Text`
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: bold;
  color: #ceb888;
  font-size: 16px;
`;

const ItemInfoCard = styled(Card)`
  background-color: #373a36;
`;

export const ItemsInfoCard = ({ item = {} }) => {
  const {
    name = "Hair Dryer",
    photos = ["https://picsum.photos/700"],
    price = "$15",
    isNegotiable = true,
    isPickupOnly = false,
    isDelivery = true,
    isCashOnly = false,
  } = item;

  return (
    <>
      <ItemInfoCard>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </ItemInfoCard>
    </>
  );
};
