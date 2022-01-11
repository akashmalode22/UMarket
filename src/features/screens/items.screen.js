import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Searchbar, FAB } from "react-native-paper";
import styled from "styled-components/native";
import { useSafeArea } from "react-native-safe-area-context";

import { ItemsContext } from "../../services/items/items.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { FavoritesBar } from "../../components/favorites/favorites-bar.component";
import colors from "../../../utils/colors";
import { ItemsInfoCard } from "../components/item-info-card.components";
import { FadeInView } from "../../components/animations/fade.animation";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #ceb888;
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ItemListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: #9d968d;
`;

export const ItemsScreen = ({ navigation }) => {
  const { items, isLoading, error } = useContext(ItemsContext);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const onFavoritesToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <SafeArea>
        {isLoading && (
          <ActivityIndicator animating={true} color={Colors.red800} />
        )}
        <SearchView>
          <Searchbar
            icon={isToggled ? "heart" : "heart-outline"}
            onIconPress={onFavoritesToggle}
            placeholder="Search Item"
          />
          {isToggled && (
            <FavoritesBar
              favorites={favorites}
              itemDetailView={navigation.navigate}
            />
          )}
        </SearchView>
        <ItemListView>
          <FlatList
            data={items}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ItemDetail", { item: item })
                  }
                >
                  <FadeInView duration={1000}>
                    <ItemsInfoCard item={item} />
                  </FadeInView>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </ItemListView>
        <FAB
          style={styles.fab}
          medium
          icon="plus"
          onPress={() => navigation.navigate("AddItem")}
        />
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 10,
    right: 0,
    bottom: 0,
  },
});
