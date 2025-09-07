import React from "react";
import { TouchableOpacity, Text, View, Image, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./d-card-category.styles";
import { ROUTES } from "../../types/routes";
import { colors } from "../../types/colors";

interface Props {
  label: string;
  imageSource: any;
}

export const DCardCategory = ({ label, imageSource }: Props) => {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate(ROUTES.CATEGORY_LIST, { category: label });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
