import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { FavoritesContext } from "../../../services/favorites/favorites.context";
import styled from "styled-components/native";
import { ItemsInfoCard } from "../../components/item-info-card.components";

const ItemListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: #9d968d;
`;

const FavoritesSafeArea = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #ceb888;
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search Favorites" />
      </SearchView>

      <ItemListView>
        <FlatList
          data={favorites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ItemDetail", { item: item })
                }
              >
                <ItemsInfoCard item={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ItemListView>
    </SafeArea>
  ) : (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search Favorites" />
      </SearchView>
      <ItemListView style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>No favorites yet</Text>
      </ItemListView>
    </SafeArea>
  );

  return (
    <SafeAreaView>
      <ItemListView>
        <FlatList
          {...favorites.map((item) => {
            const key = item.name;

            <TouchableOpacity
              onPress={() => {
                itemDetailView("ItemDetail", { item: item });
              }}
            >
              <CompactItemInfo item={item} />
            </TouchableOpacity>;
          })}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ItemListView>
    </SafeAreaView>
  );
};
