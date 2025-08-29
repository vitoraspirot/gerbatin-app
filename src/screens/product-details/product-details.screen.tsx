import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ProductDetaisScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* Imagem Produto */}
      <View style={{ alignItems: "center", marginVertical: 15 }}>
        <Image
          source={ require ("../../assets/avancado/055/drone.png") }
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      </View>

      {/* Informações */}
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          Drone Air 3S Fly More Combo (Sem tela) BR - DJI055
        </Text>
        <Text style={{ fontSize: 14, color: "gray", marginTop: 5 }}>DJI</Text>

        <TouchableOpacity>
          <Text style={{ color: "blue", marginTop: 25 }}>Ficha Técnica</Text>
        </TouchableOpacity>
      </View>

      {/* Tabela Técnica */}
      <View style={{ margin: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 8 }}>
        {[
          { label: "Cor", value: "Cinza" },
          { label: "Lar/Alt/Com", value: "3.26 / 1.05 / 25.88" },
          { label: "Peso", value: "2500g" },
          { label: "Aplicações", value: "Uso Recreativo e Comercial" },
          { label: "Tempo de operação", value: "45min" },
          { label: "Nível", value: "Drone avançado" },
          { label: "Versão", value: "Combo" },
        ].map((item, i) => (
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

      {/* Botão WhatsApp */}
      <TouchableOpacity
        onPress={() => Linking.openURL("https://wa.me/5551995230094?text=Olá,%20tive%20interesse%20no%20Drone%20Air%203S%20Fly%20More%20Combo.%0AMeu%20e-mail:")}
        style={{
          backgroundColor: "#0D0D0D",
          marginHorizontal: 20,
          marginBottom: 20,
          padding: 15,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="logo-whatsapp" size={20} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 16, marginLeft: 10 }}>
          Fale com um vendedor
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

