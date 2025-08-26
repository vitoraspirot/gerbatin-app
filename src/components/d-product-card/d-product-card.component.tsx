import { TouchableOpacity, Text } from "react-native";
import { styles } from "./d-product-card.styles";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../types/routes";

interface Props {
  title?: string;
  onPress?: () => void;
}

export const DProductCard = ({ title, onPress }: Props) => {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate(ROUTES.PRODUCT_DETAILS);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress ?? handlePress}>
      <Text style={{ color: "blue" }}>{title}</Text>
    </TouchableOpacity>
  );
};
