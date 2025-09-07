import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./product-detais.styles";
import { useRoute } from "@react-navigation/native";
import { Drone } from "@/types/types";

export const ProductDetaisScreen = () => {
  const route = useRoute();
  const drone: Drone = route.params.drone;

  const specs = [
    { label: "Cor", value: drone.color },
    {
      label: "Lar/Alt/Com",
      value: `${drone.dimensions.width}/${drone.dimensions.height}/${drone.dimensions.width}`,
    },
    { label: "Peso", value: drone.weight },
    { label: "Aplicações", value: drone.applications },
    { label: "Tempo de operação", value: drone.operation_time },
    { label: "Nível", value: `Drone ${drone.category}` },
    { label: "Versão", value: drone.version },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ alignItems: "center", marginVertical: 15 }}>
        <Image
          source={require("../../assets/avancado/055/drone.png")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{drone.name}</Text>

        <Text style={{ color: "blue", marginTop: 25 }}>Ficha Técnica</Text>
      </View>

      <View
        style={{
          margin: 15,
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 8,
        }}
      >
        {specs.map((item, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderBottomWidth: i === 6 ? 0 : 1,
              borderColor: "#eee",
            }}
          >
            <Text style={{ fontWeight: "500" }}>{item.label}</Text>
            <Text>{item.value}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL(
            `https://wa.me/5551995230094?text=Olá,%20tive%20interesse%20no%20${encodeURIComponent(
              drone.name
            )}.%0AMeu%20e-mail:`
          )
        }
      >
        <Ionicons name="logo-whatsapp" size={20} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 16, marginLeft: 10 }}>
          Fale com um vendedor
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
