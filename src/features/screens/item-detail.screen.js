import React, { useState } from "react";
import { SafeAreaView, Text, ScrollView } from "react-native";
import { List } from "react-native-paper";

import { ItemsInfoCard } from "../components/item-info-card.components";

export const ItemDetailScreen = ({ route }) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [brandExpanded, setBrandExpanded] = useState(false);
  const [conditionExpanded, setConditionExpanded] = useState(false);
  const [defectsExpanded, setDefectsExpanded] = useState(false);

  const { item } = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: "#9D968D", flex: 1 }}>
      <ItemsInfoCard item={item} bigView={true} />
      <ScrollView>
        <List.Accordion
          theme={{ colors: { primary: "#373A36" } }}
          style={{ backgroundColor: "#9D968D" }}
          title="Description"
          left={(props) => <List.Icon {...props} icon="book-open" />}
          expanded={descriptionExpanded}
          onPress={() => setDescriptionExpanded(!descriptionExpanded)}
        >
          <Text>{item.description}</Text>
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: "#373A36" } }}
          style={{ backgroundColor: "#9D968D" }}
          title="Brand"
          left={(props) => <List.Icon {...props} icon="factory" />}
          expanded={brandExpanded}
          onPress={() => setBrandExpanded(!brandExpanded)}
        >
          <Text>{item.brand}</Text>
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: "#373A36" } }}
          style={{ backgroundColor: "#9D968D" }}
          title="Condition"
          left={(props) => <List.Icon {...props} icon="hand-okay" />}
          expanded={conditionExpanded}
          onPress={() => setConditionExpanded(!conditionExpanded)}
        >
          <Text>{item.condition}</Text>
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: "#373A36" } }}
          style={{ backgroundColor: "#9D968D" }}
          title="Defects"
          left={(props) => <List.Icon {...props} icon="image-broken-variant" />}
          expanded={defectsExpanded}
          onPress={() => setDefectsExpanded(!defectsExpanded)}
        >
          <Text>{item.defects}</Text>
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};
