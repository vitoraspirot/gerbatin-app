import { StyleSheet } from "react-native";
import { colors } from "../../types/colors";

export const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: colors.blue,
    textAlign: "center",
  },
});
