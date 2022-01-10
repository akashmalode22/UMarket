import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SliderBox } from "react-native-image-slider-box";

import { colors } from "../../../utils/colors";
import { SvgXml } from "react-native-svg";
import Negotiable from "../../../assets/sort-result.svg";
import { DeliveryImage, NegotiableImage } from "./tag-images";
import { Favorite } from "../../components/favorites/favorite.component";

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

export const ItemsInfoCard = ({ item = {}, bigView = false }) => {
  const carouselRef = React.useRef(null);

  const renderItem = ({ itm, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      ></TouchableOpacity>
    );
  };

  return (
    <>
      <ItemInfoCard elevation={5}>
        <Favorite item={item} />
        <View>
          {bigView ? (
            <SliderBox images={item.photos} />
          ) : (
            <Card.Cover source={{ uri: item.photos[0] }} />
          )}
        </View>

        <Card.Content>
          <Info>
            <Title>{item.name}</Title>
            <SectionEnd>
              <Tags>
                {item.isDelivery && <DeliveryImage />}
                {item.isNegotiable && <NegotiableImage />}
              </Tags>
            </SectionEnd>
            <Price>{item.price}</Price>
          </Info>
        </Card.Content>
      </ItemInfoCard>
    </>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 150,
  },
});
