import { Text, Pressable, View, Image } from "react-native";
import { styles } from "./d-product-card.styles";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../types/routes";
import { Drone } from "../../types/types";
import { getDroneAssets } from "@/utils/droneImages";

interface Props {
  drone: Drone;
  onPress?: () => void;
}

export const ProductCard = ({ drone, onPress }: Props) => {
  const { navigate } = useNavigation();

  const { name, applications, id } = drone;

  const uri = getDroneAssets({ id });

  const handlePress = () => {
    navigate(ROUTES.PRODUCT_DETAILS, { drone: drone });
  };

  return (
    <Pressable style={styles.card} onPress={onPress ?? handlePress}>
      <View style={styles.imageContainer}>
        <Image source={uri} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={{
            color: "black",
            fontSize: 18,
            marginBottom: 4,
          }}
        >
          {name}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={{ color: "#6C6161", fontSize: 16 }}
        >
          {applications}
        </Text>
      </View>
    </Pressable>
  );
};
