import { TouchableOpacity, Text } from "react-native";
import { styles } from "./d-card-category.styles";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../types/routes";

interface Props {
  title?: string;
  onPress?: () => void;
}

export const DCardCategory = ({ title, onPress }: Props) => {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate(ROUTES.CATEGORY_LIST);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={{ color: "blue" }}>{title}</Text>
    </TouchableOpacity>
  );
};
