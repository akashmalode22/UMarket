import React from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactItemInfo } from "../../components/compact-item-info.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, itemDetailView }) => {
  return (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((item) => {
          const key = item.name;
          return (
            <TouchableOpacity
              onPress={() => {
                itemDetailView("ItemDetail", { item: item });
              }}
            >
              <CompactItemInfo item={item} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
