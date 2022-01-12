import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavoriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #ceb888;
  position: absolute;
  top: 15px;
  right: -25px;
  width: 64px;
  z-index: 9;
`;

export const Favorite = ({ item }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find((r) => r.id === item.id);

  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite ? addToFavorites(item) : removeFromFavorites(item)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
