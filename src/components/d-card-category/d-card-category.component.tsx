import { TouchableOpacity, Text } from "react-native";
import { styles } from "./d-card-category.styles";

interface Props {
  title?: string;
  onPress?: () => void;
}

export const DCardCategory = ({ title, onPress }: Props) => {
  const handlePress = () => console.log(title);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress ?? handlePress}>
      <Text style={{ color: "blue" }}>{title}</Text>
    </TouchableOpacity>
  );
};
