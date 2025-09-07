import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { styles } from "./home.styles";
import { DCardCategory, ProductCard } from "../../components";
import { colors } from "../../types/colors";

import db from "../../db/drones.json";
import { Drone } from "../../types/types";
import { getDroneAssets } from "@/utils/droneImages";

const bannerImg = require("../../assets/banner.png");

export const HomeScreen = () => {
  const drones: Drone[] = db.drones;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={bannerImg} style={{ width: "100%", borderRadius: 5 }} />
        <View style={styles.categoriesContainer}>
          <DCardCategory
            label={"Iniciante"}
            imageSource={getDroneAssets({ id: 57 })}
          />
          <DCardCategory
            label={"Intermediário"}
            imageSource={getDroneAssets({ id: 41 })}
          />
          <DCardCategory
            label={"Avançado"}
            imageSource={getDroneAssets({ id: 36 })}
          />
        </View>
        <View style={styles.productsContainer}>
          <Text style={{ color: colors.blue, marginBottom: 16, fontSize: 16 }}>
            Todos os produtos
          </Text>

          <View style={{ width: "100%" }}>
            {drones.map((drone) => {
              return <ProductCard key={drone.id} drone={drone} />;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
