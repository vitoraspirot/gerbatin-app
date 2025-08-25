import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./home.styles";
import { DCardCategory, DProductCard } from "../../components";

const bannerImg = require("../../assets/banner.png");

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={bannerImg} style={{ width: "100%", borderRadius: 5 }} />
      <View style={styles.categoriesContainer}>
        <DCardCategory title={"Iniciante"} />
        <DCardCategory title={"Intermediário"} />
        <DCardCategory title={"Avançado"} />
      </View>
      <View style={styles.productsContainer}>
        <Text style={{ color: "blue", marginBottom: 16 }}>
          Todos os produtos
        </Text>
        <View>
          <DProductCard title="Drone 1" />
          <DProductCard title="Drone 2" />
        </View>
      </View>
    </View>
  );
};
