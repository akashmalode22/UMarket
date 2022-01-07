import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { ItemsContext } from "../../services/items/items.context";
import { ActivityIndicator, Colors } from "react-native-paper";

import colors from "../../../utils/colors";

import { ItemsInfoCard } from "../components/item-info-card.components";

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

  return (
    <>
      <SafeArea>
        {isLoading && (
          <ActivityIndicator animating={true} color={Colors.red800} />
        )}
        <SearchView>
          <Searchbar placeholder="Search Item" />
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
    </>
  );
};
