import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ItemsScreen } from "../../features/screens/items.screen";
import { ItemsInfoCard } from "../../features/components/item-info-card.components";
import { ItemDetailScreen } from "../../features/screens/item-detail.screen";
import { AddItemScreen } from "../../features/additem/additem.screen";

const ItemStack = createStackNavigator();

export const ItemsNavigator = () => {
  return (
    <ItemStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <ItemStack.Screen name="Items" component={ItemsScreen} />
      <ItemStack.Screen name="ItemDetail" component={ItemDetailScreen} />
      <ItemStack.Screen name="AddItem" component={AddItemScreen} />
    </ItemStack.Navigator>
  );
};
