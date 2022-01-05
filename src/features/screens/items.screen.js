import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

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

export const ItemsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchView>
          <Searchbar placeholder="Search Item" />
        </SearchView>
        <ItemListView>
          <FlatList
            data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
            renderItem={() => <ItemsInfoCard />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
          />
        </ItemListView>
      </SafeArea>
    </>
  );
};
