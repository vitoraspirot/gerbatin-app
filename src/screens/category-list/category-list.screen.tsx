import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { styles } from "./category-list.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import db from "../../db/drones.json";
import { ProductCard } from "@/components";

type Nivel = "Iniciante" | "Intermediário" | "Avançado";
export const CategoryListScreen = () => {
  const { setOptions } = useNavigation();
  const { params } = useRoute();
  const drones = db.drones;

  const category: Nivel = params?.category;

  const nivelMap: Record<Nivel, string> = {
    Iniciante: "iniciante",
    Intermediário: "intermediário",
    Avançado: "avançado",
  };

  const normalizedCategory = nivelMap[category];

  useEffect(() => {
    setOptions({ headerTitle: category });
  }, []);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {drones.map((drone) => {
        if (drone.category === normalizedCategory) {
          return <ProductCard key={drone.id} drone={drone} />;
        }
      })}
    </ScrollView>
  );
};
