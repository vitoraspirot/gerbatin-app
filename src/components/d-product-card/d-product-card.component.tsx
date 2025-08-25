import { TouchableOpacity, Text } from "react-native";
import { styles } from "./d-product-card.styles";

interface Props {
  title?: string;
  onPress?: () => void;
}

export const DProductCard = ({ title, onPress }: Props) => {
  const handlePress = () => console.log(title);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress ?? handlePress}>
      <Text style={{ color: "blue" }}>{title}</Text>
    </TouchableOpacity>
  );
};
