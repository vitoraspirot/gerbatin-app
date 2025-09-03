import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./category-list.styles";
import { Ionicons } from "@expo/vector-icons";

// 1. Definir a interface para o tipo do produto (drone)
interface Drone {
  id: string;
  name: string;
  brand: string;
  image: string;
}

// 2. Definir a interface para as props do com ponente ProductCard
interface ProductCardProps {
  item: Drone;
}

// Dados de exemplo, agora tipados como um array de 'Drone'
const drones: Drone[] = [
  {
    id: "1",
    name: "Drone Mini 4 Pro Standard (Com tela)",
    brand: "DJI",
    image: "https://minhas-imagens.com/drone-mini-4.jpg",
  },
  {
    id: "2",
    name: "Drone Neo Fly More Combo (Com tela)",
    brand: "DJI",
    image: "https://minhas-imagens.com/drone-neo-fly-more.jpg",
  },
  {
    id: "3",
    name: "DroneMini 3 Fly More Combo",
    brand: "DJI",
    image: "https://minhas-imagens.com/drone-mini-3-combo.jpg",
  },
  {
    id: "4",
    name: "Drone DJI Mini 3 Standard",
    brand: "DJI",
    image: "https://minhas-imagens.com/drone-mini-3.jpg",
  },
];

// Componente do card do produto, agora tipado com 'ProductCardProps'
const ProductCard: React.FC<ProductCardProps> = ({ item }) => (
  <View style={styles.cardContainer}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <View style={styles.textContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productBrand}>{item.brand}</Text>
    </View>
    <TouchableOpacity style={styles.bookmarkButton}>
      <Ionicons name="bookmark" size={24} color="#000" />
    </TouchableOpacity>
  </View>
);

export const CategoryListScreen = () => {
  return (
    <View style={styles.container}>

      {/* 3. Lista de itens, com o 'data' tipado */}
      <FlatList<Drone>
        data={drones}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      {/* 4. Paginação */}
      <View style={styles.paginationContainer}>
        <TouchableOpacity style={styles.paginationButton}>
          <Ionicons name="arrow-back" size={16} color="#000" />
          <Text style={styles.paginationText}>Previous</Text>
        </TouchableOpacity>
        <View style={styles.paginationNumbers}>
          <Text style={[styles.pageNumber, styles.activePage]}>1</Text>
          <Text style={styles.pageNumber}>2</Text>
          <Text style={styles.pageNumber}>3</Text>
        </View>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationText}>Next</Text>
          <Ionicons name="arrow-forward" size={16} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};