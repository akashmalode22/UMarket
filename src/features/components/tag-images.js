import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const DeliveryImage = () => {
  return (
    <>
      <Image
        source={require("../../../assets/delivery.png")}
        style={{ width: 20, height: 20, tintColor: "green" }}
        color="blue"
      />
    </>
  );
};

const NegotiableImage = () => {
  return (
    <>
      <Image
        source={require("../../../assets/negotiation.png")}
        style={{ width: 20, height: 20, tintColor: "green" }}
        color="blue"
      />
    </>
  );
};

export { DeliveryImage, NegotiableImage };
