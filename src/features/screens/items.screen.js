import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import colors from "../../../utils/colors";

import { ItemsInfoCard } from "../components/item-info-card.components";

const SafeAreaViewStyle = styled(SafeAreaView)`
  flex: 1;
  background-color: #ceb888;
`;

const SearchView = styled.View`
  padding: 16px;
`;

const ItemListView = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #9d968d;
`;

export const ItemsScreen = () => {
  return (
    <>
      <SafeAreaViewStyle>
        <SearchView>
          <Searchbar placeholder="Search Item" />
        </SearchView>
        <ItemListView>
          <ItemsInfoCard />
        </ItemListView>
      </SafeAreaViewStyle>
    </>
  );
};
