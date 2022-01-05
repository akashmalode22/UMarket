import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../utils/colors";
import { SvgXml } from "react-native-svg";
import Negotiable from "../../../assets/sort-result.svg";
import { DeliveryImage, NegotiableImage } from "./tag-images";

const Title = styled.Text`
  font-weight: bold;
  color: #ceb888;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Price = styled.Text`
  font-weight: bold;
  color: #ceb888;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

const ItemInfoCard = styled(Card)`
  background-color: #373a36;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Tags = styled.View`
  flex-direction: column;
  justify-content: center;
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
      <ItemInfoCard elevation={5}>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Info>
            <Title>{name}</Title>
            <SectionEnd>
              <Tags>
                {isDelivery && <DeliveryImage />}
                {isNegotiable && <NegotiableImage />}
              </Tags>
            </SectionEnd>
            <Price>{price}</Price>
          </Info>
        </Card.Content>
      </ItemInfoCard>
    </>
  );
};
